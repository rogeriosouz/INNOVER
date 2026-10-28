export function StatementSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0d141f] py-24 text-[#f2f5fa] md:py-32">
      <div className="relative mx-auto w-[88%] max-w-[1400px] overflow-hidden rounded-[30px] border border-[#aebeff]/20 bg-[linear-gradient(120deg,#1e3048_0%,#131f30_54%,#0e1723_100%)] px-7 py-16 shadow-[inset_0_1px_0_rgba(255,255,255,.07)] sm:px-12 md:py-24 lg:px-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-48 h-[520px] w-[520px] rounded-full border border-[#aebeff]/15 shadow-[0_0_0_65px_rgba(174,190,255,.025),0_0_0_130px_rgba(174,190,255,.018)]" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#aebeff]/70 to-transparent" />
        <div className="relative">
          <div data-reveal className="flex items-center gap-4 text-xs font-bold uppercase tracking-[.2em] text-[#aebeff]">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#aebeff]/35 bg-[#aebeff]/10 text-lg">✳</span>
            Uma ideia que guia o trabalho
          </div>
          <p data-reveal className="mt-10 max-w-[1080px] text-[clamp(2.4rem,5.3vw,6.3rem)] font-black leading-[1.04] tracking-[-.075em]">
            Antes de impressionar, um site precisa <span className="text-[#aebeff]">ser entendido.</span>
          </p>
          <div data-reveal className="mt-10 flex items-center gap-4 border-t border-white/15 pt-6 text-[10px] font-bold uppercase tracking-[.2em] text-white/45">
            <span>INNOVER / Pensamento visual</span><span aria-hidden="true" className="ml-auto text-xl text-[#aebeff]">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
