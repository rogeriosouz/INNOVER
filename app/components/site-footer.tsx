export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080d14] py-12 text-white/60 md:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 -bottom-60 h-80 w-80 rounded-full bg-[#aebeff]/[.055] blur-[80px]" />
      <div className="relative mx-auto flex w-[88%] max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div data-reveal>
          <a href="#inicio" className="text-[clamp(1.6rem,3vw,2.2rem)] font-black tracking-[-.095em] text-white transition-colors hover:text-[#dce3ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aebeff]" aria-label="INNOVER, voltar ao início">INNOVER<span className="text-[#aebeff]">.com</span></a>
          <p className="mt-3 max-w-[300px] text-sm leading-6 text-white/50">Ideias que ganham forma, marcas que ficam.</p>
        </div>
        <nav data-reveal aria-label="Navegação do rodapé" className="flex flex-wrap items-center gap-x-7 gap-y-4 text-xs font-bold uppercase tracking-[.12em]">
          <a href="#sobre" className="transition-colors hover:text-[#aebeff]">Sobre</a>
          <a href="#servicos" className="transition-colors hover:text-[#aebeff]">Serviços</a>
          <a href="#projetos" className="transition-colors hover:text-[#aebeff]">Projetos</a>
          <a href="#contato" className="transition-colors hover:text-[#aebeff]">Contato</a>
        </nav>
      </div>
      <div className="relative mx-auto mt-12 flex w-[88%] max-w-[1400px] items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] font-bold uppercase tracking-[.16em] text-white/35">
        <span>INNOVER / Estúdio digital</span><a href="#inicio" className="inline-flex items-center gap-2 text-[#aebeff] transition-colors hover:text-white">Voltar ao topo <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
