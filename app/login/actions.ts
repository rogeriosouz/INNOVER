"use server";

import { redirect } from "next/navigation";
import {
  clearLoginSession,
  createLoginSession,
  hasValidCredentials,
} from "@/app/lib/auth";

export type LoginState = {
  error?: string;
};

export async function login(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!hasValidCredentials(email, password)) {
    return { error: "E-mail ou senha inválidos." };
  }

  await createLoginSession(email.trim().toLowerCase());
  redirect("/");
}

export async function logout() {
  await clearLoginSession();
  redirect("/login");
}
