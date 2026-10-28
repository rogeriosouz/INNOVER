import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "innover_session";

const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7;

function getAuthConfig() {
  const email = process.env.LOGIN_EMAIL;
  const password = process.env.LOGIN_PASSWORD;
  const secret = process.env.SESSION_SECRET;

  if (!email || !password || !secret) {
    throw new Error(
      "Defina LOGIN_EMAIL, LOGIN_PASSWORD e SESSION_SECRET no arquivo .env.local.",
    );
  }

  return { email: email.trim().toLowerCase(), password, secret };
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

function createSession(email: string) {
  const { secret } = getAuthConfig();
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS;
  const payload = Buffer.from(JSON.stringify({ email, expiresAt })).toString(
    "base64url",
  );

  return `${payload}.${sign(payload, secret)}`;
}

function isValidSession(value: string | undefined) {
  if (!value) return false;

  const [payload, signature, ...extraParts] = value.split(".");
  if (!payload || !signature || extraParts.length > 0) return false;

  try {
    const { secret } = getAuthConfig();
    const expectedSignature = sign(payload, secret);

    if (
      signature.length !== expectedSignature.length ||
      !timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))
    ) {
      return false;
    }

    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    ) as { email?: string; expiresAt?: number };

    return (
      typeof session.email === "string" &&
      typeof session.expiresAt === "number" &&
      session.expiresAt > Math.floor(Date.now() / 1000)
    );
  } catch {
    return false;
  }
}

export function hasValidCredentials(email: string, password: string) {
  const config = getAuthConfig();
  return (
    email.trim().toLowerCase() === config.email && password === config.password
  );
}

export async function createLoginSession(email: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, createSession(email), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });
}

export async function hasValidSession() {
  const cookieStore = await cookies();
  return isValidSession(cookieStore.get(SESSION_COOKIE)?.value);
}

export async function clearLoginSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
