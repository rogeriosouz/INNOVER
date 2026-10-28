import { ProjectGallery } from "./project-gallery";

export default function ProjectsSection() {
  return (
    <section id="projetos" className="relative overflow-hidden bg-[#101823] py-24 text-white md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-14 h-[420px] w-[420px] rounded-full bg-[#aebeff]/[.04] blur-[100px]" />
      <div className="relative mx-auto w-[88%] max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-7 border-b border-white/15 pb-10 lg:flex-row lg:items-end">
          <div>
            <p data-reveal className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#aebeff]"><span className="h-px w-8 bg-[#aebeff]/65" />04 / Projetos</p>
            <h2 data-reveal className="mt-6 max-w-[900px] text-[clamp(2.8rem,5.8vw,6rem)] font-black leading-[.98] tracking-[-.08em]">Ideias em diferentes formatos.</h2>
          </div>
          <div data-reveal className="max-w-[340px]">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#aebeff]/25 bg-[#aebeff]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-[#d4deff]"><span className="h-1.5 w-1.5 rounded-full bg-[#aebeff]" />Explorações criativas</span>
            <p className="text-sm leading-7 text-white/60">Nove estudos demonstrativos de direção visual. Eles mostram possibilidades, não trabalhos feitos para clientes.</p>
          </div>
        </div>
        <ProjectGallery />
      </div>
    </section>
  );
}
