export default function AboutSection() {
  return (
    <section id="sobre" className="relative isolate overflow-hidden border-t border-white/10 bg-[#111a26] py-24 text-white md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-52 top-8 -z-10 h-[500px] w-[500px] rounded-full bg-[#aebeff]/[.06] blur-[110px]" />
      <div className="relative mx-auto grid w-[88%] max-w-[1400px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,.9fr)] lg:gap-24">
        <div>
          <p data-reveal className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#aebeff]"><span className="h-px w-8 bg-[#aebeff]/65" />01 / Sobre</p>
          <h2 data-reveal className="mt-7 max-w-[760px] text-[clamp(2.8rem,5.5vw,6rem)] font-black leading-[.98] tracking-[-.08em]">
            Primeiro a mensagem. <span className="text-white/45">Depois a forma.</span>
          </h2>
          <p data-reveal className="mt-8 max-w-[570px] text-sm leading-8 text-white/65 md:text-base">
            Antes de desenhar uma página, quero entender o que você faz, quem precisa ouvir isso e qual é o próximo passo do seu negócio. O visual nasce dessa conversa.
          </p>
          <a data-reveal href="#servicos" className="group mt-9 inline-flex min-h-12 items-center gap-5 rounded-full border border-white/20 bg-white/[.035] px-5 text-sm font-bold text-white transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#aebeff]/60 hover:bg-[#aebeff]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aebeff]">
            Veja o que posso criar <span aria-hidden="true" className="text-lg text-[#aebeff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>

        <div data-reveal className="group relative flex min-h-[340px] min-w-0 flex-col justify-between overflow-hidden rounded-[28px] border border-[#aebeff]/20 bg-[linear-gradient(145deg,#2a3c55_0%,#1b293b_44%,#101a28_100%)] p-7 shadow-[0_25px_70px_rgba(0,0,0,.22),inset_0_1px_0_rgba(255,255,255,.12)] sm:min-h-[430px] sm:p-11">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[.09] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full border border-[#aebeff]/20 shadow-[0_0_90px_rgba(174,190,255,.12)] transition-transform duration-700 group-hover:scale-110" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-12 top-1/3 h-44 w-44 rounded-full border border-dashed border-[#aebeff]/20" />
          <div className="relative flex items-start justify-between gap-5 border-b border-white/20 pb-5 text-[10px] font-bold uppercase tracking-[.18em] text-white/65 sm:text-xs">
            <span>INNOVER <span className="text-[#aebeff]">/</span> Digital</span><span className="text-right">Design com direção</span>
          </div>
          <div className="relative py-8">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#aebeff]/25 bg-[#aebeff]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em] text-[#dce5ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#aebeff]" /> Criatividade com propósito
            </span>
            <p className="max-w-full break-words text-[clamp(2.45rem,5.25vw,5.65rem)] font-black leading-none tracking-[-.105em]">INNOVER<span className="text-[#aebeff]">.</span></p>
            <p className="mt-6 max-w-[370px] text-sm leading-7 text-white/65">Atenção ao que precisa ser dito — e ao jeito certo de mostrar.</p>
          </div>
          <div className="relative flex items-center justify-between border-t border-white/20 pt-5 text-[10px] font-bold uppercase tracking-[.16em] text-white/45">
            <span>Forma + intenção</span><span className="text-lg leading-none text-[#aebeff]">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
