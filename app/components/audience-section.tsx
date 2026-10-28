const moments = [
  {
    number: "01",
    title: "Vai começar agora?",
    description: "Vamos organizar o que você faz e apresentar isso com clareza desde o primeiro contato.",
  },
  {
    number: "02",
    title: "O negócio mudou?",
    description: "É hora de fazer o site e a identidade acompanharem a fase atual da sua marca.",
  },
  {
    number: "03",
    title: "Tem algo para lançar?",
    description: "Uma página focada pode ajudar a explicar a novidade e abrir espaço para novas conversas.",
  },
];

export function AudienceSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0d141f] py-24 text-white md:py-32">
      <div className="mx-auto w-[88%] max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[.4fr_1fr] lg:gap-20">
          <p data-reveal className="flex items-start gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#aebeff]"><span className="mt-1.5 h-px w-8 bg-[#aebeff]/65" />02 / Para quem</p>
          <div>
            <h2 data-reveal className="max-w-[830px] text-[clamp(2.8rem,5.8vw,6rem)] font-black leading-[.98] tracking-[-.08em]">Em que ponto você está?</h2>
            <p data-reveal className="mt-7 max-w-[630px] text-sm leading-7 text-white/60 md:text-base">Não existe um pacote que sirva para todo mundo. O projeto começa pelo problema que você precisa resolver.</p>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:gap-5">
          {moments.map((moment) => (
            <article data-reveal key={moment.number} className="group relative flex min-h-[315px] flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(155deg,#1b2a3d,#121c2a_75%)] p-7 shadow-[0_15px_45px_rgba(0,0,0,.1)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#aebeff]/40 hover:shadow-[0_25px_55px_rgba(0,0,0,.2)] sm:p-9">
              <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full border border-[#aebeff]/10 transition-transform duration-500 group-hover:scale-125" />
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold tracking-[.18em] text-[#aebeff]">{moment.number} / 03</span>
                <span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.04] text-xl text-[#aebeff] transition-[background-color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-[#aebeff]/15">↗</span>
              </div>
              <div className="relative mt-auto pt-16">
                <div aria-hidden="true" className="mb-6 h-px w-12 bg-[#aebeff]/75 transition-[width] duration-500 group-hover:w-20" />
                <h3 className="max-w-[340px] text-2xl font-bold leading-tight tracking-[-.055em] sm:text-3xl">{moment.title}</h3>
                <p className="mt-4 max-w-[340px] text-sm leading-7 text-white/60">{moment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
