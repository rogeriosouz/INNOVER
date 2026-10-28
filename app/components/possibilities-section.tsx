const formats = [
  {
    number: "01",
    category: "Web",
    title: "Um lugar para apresentar seu trabalho.",
    details: "Landing page, site institucional, página de serviço e um caminho claro para o contato.",
  },
  {
    number: "02",
    category: "Marca",
    title: "Uma identidade que se mantém reconhecível.",
    details: "Logo, tipografia, cores e aplicações definidos de acordo com o projeto.",
  },
  {
    number: "03",
    category: "Conteúdo",
    title: "Peças para comunicar o que importa.",
    details: "Visuais para redes, campanhas ou lançamentos, com uma linguagem consistente.",
  },
];

export function PossibilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#172231] py-24 text-white md:py-32">
      <div className="mx-auto w-[88%] max-w-[1400px]">
        <div className="grid gap-7 lg:grid-cols-[.4fr_1fr] lg:gap-20">
          <p data-reveal className="flex items-start gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#aebeff]"><span className="mt-1.5 h-px w-8 bg-[#aebeff]/65" />05 / Formatos</p>
          <div>
            <h2 data-reveal className="max-w-[850px] text-[clamp(2.8rem,5.8vw,6rem)] font-black leading-[.98] tracking-[-.08em]">O que podemos colocar de pé.</h2>
            <p data-reveal className="mt-7 max-w-[630px] text-sm leading-7 text-white/60 md:text-base">O escopo depende da sua necessidade. Estes são pontos de partida, não pacotes fechados.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {formats.map((format) => (
            <article data-reveal key={format.number} className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(150deg,#26384e_0%,#111c2b_100%)] p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#aebeff]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,.2)] sm:p-9">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-10 h-44 w-44 rotate-45 rounded-[40px] border border-white/10 transition-transform duration-700 group-hover:rotate-[65deg]" />
              <div className="relative flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#aebeff]">{format.number} / 03</span>
                <span className="rounded-full border border-[#aebeff]/25 bg-[#aebeff]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-[#dbe3ff]">{format.category}</span>
              </div>
              <div className="relative mt-auto pt-20">
                <h3 className="max-w-[380px] text-2xl font-bold leading-[1.15] tracking-[-.055em] md:text-3xl">{format.title}</h3>
                <p className="mt-5 max-w-[380px] border-t border-white/15 pt-5 text-sm leading-7 text-white/60">{format.details}</p>
              </div>
              <span aria-hidden="true" className="absolute bottom-8 right-7 text-xl text-[#aebeff]/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:right-9">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
