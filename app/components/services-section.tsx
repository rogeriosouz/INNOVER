const services = [
  {
    number: "01",
    label: "Web & conversão",
    title: "Sites e landing pages",
    description: "Páginas responsivas para apresentar seu negócio, organizar informações e abrir um caminho direto para contato.",
  },
  {
    number: "02",
    label: "Marca & direção",
    title: "Identidade visual",
    description: "Um sistema de cores, tipografia e elementos para sua marca aparecer de forma consistente.",
  },
  {
    number: "03",
    label: "Presença digital",
    title: "Conteúdo digital",
    description: "Peças para redes e campanhas que seguem a mesma linguagem visual do seu negócio.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-[#172231] py-24 text-white md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -left-48 top-24 h-[500px] w-[500px] rounded-full bg-[#aebeff]/[.04] blur-[110px]" />
      <div className="relative mx-auto w-[88%] max-w-[1400px]">
        <div className="mb-14 grid gap-7 lg:grid-cols-[.4fr_1fr] lg:gap-20">
          <p data-reveal className="flex items-start gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#aebeff]"><span className="mt-1.5 h-px w-8 bg-[#aebeff]/65" />03 / Serviços</p>
          <h2 data-reveal className="max-w-[900px] text-[clamp(2.8rem,5.8vw,6rem)] font-black leading-[.98] tracking-[-.08em]">O que posso criar para você.</h2>
        </div>
        <div className="grid gap-4">
          {services.map((service) => (
            <article data-reveal key={service.number} className="group relative grid items-center gap-6 overflow-hidden rounded-[24px] border border-white/10 bg-[#0e1724]/55 p-6 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#aebeff]/35 hover:bg-[#1b2b3f] sm:p-8 md:grid-cols-[65px_minmax(0,1fr)_minmax(0,.75fr)_48px] md:gap-8">
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[#aebeff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="self-start text-3xl font-black tracking-[-.08em] text-[#aebeff]/60 md:self-center">{service.number}</span>
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#aebeff]/75">{service.label}</p>
                <h3 className="max-w-[570px] text-2xl font-bold leading-tight tracking-[-.055em] sm:text-3xl md:text-4xl">{service.title}</h3>
              </div>
              <p className="max-w-[390px] text-sm leading-7 text-white/65">{service.description}</p>
              <span aria-hidden="true" className="hidden h-11 w-11 place-items-center rounded-full border border-white/15 text-xl text-[#aebeff] transition-[background-color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-[#aebeff]/15 md:grid">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
