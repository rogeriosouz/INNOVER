import { ScrollReveal } from "./scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Primeiro, entender.",
    description: "Você conta o que precisa, para quem é o projeto e o que já existe. A partir daí, definimos o escopo.",
  },
  {
    number: "02",
    title: "Depois, construir.",
    description: "Organizo a direção visual e desenvolvo as peças ou páginas combinadas, com espaço para ajustes.",
  },
  {
    number: "03",
    title: "Por fim, colocar em uso.",
    description: "Com tudo revisado, você recebe o material final para publicar e apresentar seu trabalho.",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="relative overflow-hidden bg-[#141e2c] py-24 text-white md:py-32">
      <div className="mx-auto w-[88%] max-w-[1400px]">
        <div className="grid gap-7 lg:grid-cols-[.4fr_1fr] lg:gap-20">
          <p data-reveal className="flex items-start gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#aebeff]"><span className="mt-1.5 h-px w-8 bg-[#aebeff]/65" />06 / Processo</p>
          <div>
            <h2 data-reveal className="max-w-[800px] text-[clamp(2.8rem,5.8vw,6rem)] font-black leading-[.98] tracking-[-.08em]">Sem mistério no caminho.</h2>
            <p data-reveal className="mt-7 max-w-[620px] text-sm leading-7 text-white/60 md:text-base">Você sabe o que está sendo feito e por quê, do primeiro papo à entrega.</p>
          </div>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-3">
          <div aria-hidden="true" className="pointer-events-none absolute left-[8%] right-[8%] top-[42px] hidden border-t border-dashed border-[#aebeff]/35 md:block" />
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} variant="card" delay={index * 90} className="relative h-full">
              <article className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(155deg,#24364b,#121c2b_85%)] p-7 shadow-[0_18px_50px_rgba(0,0,0,.12)] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#aebeff]/40 sm:p-9">
                <div aria-hidden="true" className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full border border-white/10" />
                <div className="relative flex items-center justify-between">
                  <span className="text-5xl font-black tracking-[-.09em] text-[#aebeff]">{step.number}</span>
                  <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full border border-[#aebeff]/30 bg-[#aebeff]/10 text-sm text-[#aebeff]">✦</span>
                </div>
                <div className="relative mt-auto pt-14">
                  <div aria-hidden="true" className="mb-6 h-px w-12 bg-[#aebeff]/65" />
                  <h3 className="text-2xl font-bold leading-tight tracking-[-.05em]">{step.title}</h3>
                  <p className="mt-4 max-w-[340px] text-sm leading-7 text-white/65">{step.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
