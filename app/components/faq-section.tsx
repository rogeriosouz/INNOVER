const questions = [
  {
    question: "Posso contratar só uma landing page?",
    answer: "Sim. O projeto pode ser uma página específica ou algo mais amplo. O escopo depende do que você precisa agora.",
  },
  {
    question: "Preciso já ter textos e imagens?",
    answer: "Se você já tiver esse material, ótimo. Se ainda não tiver, podemos identificar o que falta antes de definir o projeto.",
  },
  {
    question: "Como começamos?",
    answer: "Me conte sua ideia no formulário abaixo. A conversa inicial serve para entender objetivos, prioridades e próximos passos.",
  },
];

export function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-[#141e2c] py-24 text-white md:py-32">
      <div className="mx-auto grid w-[88%] max-w-[1400px] gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <span data-reveal className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#aebeff]"><span className="h-px w-8 bg-[#aebeff]/65" />07 / Dúvidas</span>
          <h2 data-reveal className="mt-7 max-w-[450px] text-[clamp(2.8rem,4.7vw,5.1rem)] font-black leading-[1.02] tracking-[-.075em]">Perguntas antes do primeiro papo.</h2>
          <p data-reveal className="mt-7 max-w-[360px] text-sm leading-7 text-white/55">Tudo começa com clareza. Aqui estão algumas respostas para ajudar você a dar o próximo passo.</p>
        </div>
        <div className="flex flex-col gap-3">
          {questions.map((item, index) => (
            <details data-reveal key={item.question} className="group overflow-hidden rounded-[20px] border border-white/10 bg-[#1b2a3b]/70 px-6 py-2 transition-[border-color,background-color] duration-300 hover:border-[#aebeff]/35 open:border-[#aebeff]/40 open:bg-[#203149] sm:px-7">
              <summary className="flex min-h-[82px] cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold leading-snug tracking-[-.035em] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aebeff] sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-center gap-4"><span className="shrink-0 text-[10px] font-bold tracking-[.14em] text-[#aebeff]/70">0{index + 1}</span>{item.question}</span>
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#aebeff]/25 bg-[#aebeff]/10 text-xl font-light text-[#aebeff] transition-[transform,background-color] duration-300 group-open:rotate-45 group-open:bg-[#aebeff]/20">+</span>
              </summary>
              <p className="max-w-[540px] border-t border-white/10 pb-6 pt-5 text-sm leading-7 text-white/65">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
