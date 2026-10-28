"use client";

import { FormEvent, useState } from "react";

const email = "ola@innover.com.br";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export function ContactSection() {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = `Olá! Meu nome é ${name}.\n\nProjeto: ${project}\n\n${message}`;
    if (whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Novo projeto: ${project}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-[#101823] py-24 text-white md:py-32">
      <div className="relative mx-auto grid w-[88%] max-w-[1400px] gap-12 overflow-hidden rounded-[30px] border border-[#aebeff]/20 bg-[linear-gradient(145deg,#213249_0%,#142236_45%,#0d1624_100%)] p-7 shadow-[0_22px_75px_rgba(0,0,0,.22)] sm:p-10 md:grid-cols-2 md:gap-16 md:p-14">
        <div className="flex flex-col">
          <span data-reveal className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#aebeff]">08 / Contato</span>
          <h2 data-reveal className="mt-8 max-w-[470px] text-[clamp(2.75rem,5vw,5.7rem)] font-black leading-[1.04] tracking-[-.075em]">
            Me conta o que você precisa.
          </h2>
          <p data-reveal className="mt-7 max-w-[390px] text-sm leading-7 text-white/60 md:text-base">
            Pode ser uma ideia pronta ou só um problema para resolver. Escreva um pouco sobre o projeto e a gente começa por aí.
          </p>
          <a data-reveal href={`mailto:${email}`} className="mt-12 inline-flex w-fit max-w-full items-center gap-2 break-all rounded-full border border-white/20 bg-white/[.04] px-5 py-3 text-sm font-semibold text-[#dbe3ff] transition-[background-color,border-color] hover:border-[#aebeff]/50 hover:bg-[#aebeff]/10 md:mt-auto">
            {email}
          </a>
        </div>

        <form data-reveal onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-[24px] border border-white/10 bg-[#0a1422]/65 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.04)] sm:p-8" aria-label="Formulário de contato">
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
            Seu nome
            <input value={name} onChange={(event) => setName(event.target.value)} required maxLength={100} placeholder="Como posso chamar você?" className="h-14 rounded-xl border border-white/15 bg-white/[.045] px-4 text-sm font-normal normal-case tracking-normal text-white outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/35 focus:border-[#aebeff]/70 focus:bg-[#aebeff]/[.06] focus:shadow-[0_0_0_3px_rgba(174,190,255,.09)]" />
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
            Seu projeto
            <input value={project} onChange={(event) => setProject(event.target.value)} required maxLength={140} placeholder="O que você tem em mente?" className="h-14 rounded-xl border border-white/15 bg-white/[.045] px-4 text-sm font-normal normal-case tracking-normal text-white outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/35 focus:border-[#aebeff]/70 focus:bg-[#aebeff]/[.06] focus:shadow-[0_0_0_3px_rgba(174,190,255,.09)]" />
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
            Mensagem
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} required maxLength={2000} rows={5} placeholder="Conte um pouco mais sobre sua ideia..." className="min-h-[150px] resize-y rounded-xl border border-white/15 bg-white/[.045] px-4 py-4 text-sm font-normal normal-case tracking-normal text-white outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/35 focus:border-[#aebeff]/70 focus:bg-[#aebeff]/[.06] focus:shadow-[0_0_0_3px_rgba(174,190,255,.09)]" />
          </label>
          <button type="submit" className="group mt-2 flex min-h-14 items-center justify-between gap-5 rounded-full bg-[#aebeff] px-6 text-sm font-black text-[#0b1018] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#cad3ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aebeff]">
            {whatsappNumber ? "Conversar no WhatsApp" : "Enviar por e-mail"}
            <span aria-hidden="true" className="text-xl font-light transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </button>
          <p className="text-xs leading-5 text-white/45">
            {whatsappNumber ? "Ao clicar, sua mensagem será aberta no WhatsApp para você confirmar o envio." : "Ao clicar, sua mensagem será aberta no aplicativo de e-mail para você confirmar o envio."}
          </p>
        </form>
      </div>
    </section>
  );
}
