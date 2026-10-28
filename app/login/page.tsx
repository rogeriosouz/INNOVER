import { redirect } from "next/navigation";
import { hasValidSession } from "@/app/lib/auth";
import { LoginForm } from "./login-form";

export default async function LoginPage() {
  if (await hasValidSession()) {
    redirect("/");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-5 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(129,140,248,0.25),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.16),_transparent_45%)]" />
      <section className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-7 shadow-2xl shadow-black/40 backdrop-blur sm:p-9">
        <p className="text-sm font-bold tracking-[0.22em] text-indigo-200">INNOVER</p>
        <h1 className="mt-4 text-3xl font-black tracking-tight">Área restrita</h1>
        <p className="mt-3 leading-6 text-slate-300">
          Informe suas credenciais para acessar o site.
        </p>
        <LoginForm />
      </section>
    </main>
  );
}
