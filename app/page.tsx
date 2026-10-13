"use client";

import { useEffect, useState } from "react";

const reveal = "opacity-0 translate-y-8 transition-all duration-700 ease-out data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0";

const projects = [
  { title: "Casa Aurora", type: "Branding · E-commerce", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85" },
  { title: "Forma Studio", type: "Direção de arte · Editorial", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85" },
  { title: "Maré Alta", type: "Identidade · Digital", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85" },
];

const tickerItems = [
  "Criação de sites",
  "Marketing digital",
  "Identidade visual",
  "Social media",
  "Next.js",
  "Tailwind CSS",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute top-10 left-1/2 z-50 flex h-16 w-[84vw] max-w-[1200px] -translate-x-1/2 items-center justify-between rounded-[22px] border border-white/80 bg-[#181d23]/45 px-7 text-white shadow-[0_14px_35px_rgba(0,0,0,.12)] backdrop-blur-md max-md:top-5 max-md:h-14 max-md:w-[88vw] max-md:px-4">
        <a href="#inicio" className="shrink-0 text-2xl font-black tracking-[-.095em] max-md:text-xl" aria-label="Innover, ir para o início">INNOVER<span className="text-sm font-semibold tracking-[-.04em]">.com</span></a>
        <button type="button" className="relative z-50 hidden flex-col gap-1.5 p-2 max-md:flex" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          <span className="h-0.5 w-6 bg-white" /><span className="h-0.5 w-6 bg-white" />
        </button>
        <nav className={`flex w-auto items-center gap-8 text-sm font-semibold lg:gap-10 max-md:fixed max-md:inset-0 max-md:z-40 max-md:w-full max-md:flex-col max-md:justify-center max-md:gap-8 max-md:bg-primary max-md:text-3xl ${menuOpen ? "max-md:flex" : "max-md:hidden"}`}>
          {[["Home", "#inicio"], ["Sobre", "#sobre"], ["Portfólio", "#projetos"], ["Contato", "mailto:ola@innover.com.br"]].map(([label, link]) => <a key={link} href={link} className="relative py-2 transition-colors after:absolute after:right-0 after:bottom-1 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform hover:text-white/75 hover:after:scale-x-100" onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
      </header>

      <section id="inicio" className="relative flex min-h-screen items-center justify-center bg-[linear-gradient(105deg,#11161c_12%,#1b2027_54%,#5f6a70_120%)] px-[8vw] pt-24 text-white max-md:min-h-[670px]">
        <div aria-hidden="true" className="absolute inset-y-0 left-[5.5vw] w-0 border-l-2 border-white/75 max-md:left-[6vw]" />
        <div aria-hidden="true" className="absolute top-[18%] right-[-12%] h-[54vw] max-h-[750px] w-[54vw] max-w-[750px] rounded-full bg-white/5 blur-3xl" />
        <h1 className="relative z-10 max-w-[1100px] text-center text-[clamp(4rem,7.7vw,8rem)] leading-[1.04] font-black tracking-[-.055em] max-md:text-[14vw] max-md:tracking-[-.07em]"><span className="block">UM TÍTULO</span><span className="block">CHAMATIVO</span></h1>
        <div role="region" aria-label="Serviços e tecnologias" className="group absolute right-[9vw] bottom-24 left-[9vw] z-10 overflow-hidden border-y border-white/25 bg-[#151a20]/25 py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] max-md:right-[8vw] max-md:bottom-20 max-md:left-[8vw] max-md:py-3">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center motion-reduce:animate-none group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-10 pr-10 max-md:gap-7 max-md:pr-7">
                {tickerItems.map((item) => (
                  <span key={item} className="flex shrink-0 items-center gap-10 text-xs font-semibold uppercase tracking-[.17em] text-white/80 max-md:gap-7 max-md:text-[.65rem]">
                    {item}<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <a href="#sobre" className="absolute bottom-10 left-[9vw] z-10 flex items-center gap-3 text-[.68rem] font-semibold uppercase tracking-[.18em] text-white/80 transition-colors hover:text-white max-md:left-[9vw]"><span className="h-px w-8 bg-white/70" />Role para explorar <span aria-hidden="true" className="text-lg leading-none">↓</span></a>
        <span className="absolute right-[9vw] bottom-11 text-[.68rem] font-semibold tracking-[.18em] text-white/60 max-md:hidden">01 / 03</span>
      </section>

      <section id="sobre" className="relative bg-[linear-gradient(105deg,#12171c,#5d676d)] px-[7vw] pt-32 pb-32 text-white max-md:px-[6vw] max-md:pt-20 max-md:pb-20">
        <div aria-hidden="true" className="absolute inset-y-0 left-[5.5vw] border-l-2 border-white/75 max-md:left-[6vw]" />
        <div aria-hidden="true" className="absolute top-32 right-[5.5vw] bottom-0 border-r-2 border-white/70 max-md:top-20 max-md:right-[6vw]" />
        <div data-reveal className={`${reveal} relative left-[-7vw] z-10 mb-10 flex w-screen items-center gap-4 whitespace-nowrap text-2xl max-md:left-[-6vw] max-md:mb-7 max-md:gap-2 max-md:text-lg`}>
          <span className="h-0.5 w-[21vw] shrink-0 bg-white/80 max-md:w-[18vw]" /><span>Sobre</span><span className="h-0.5 flex-1 bg-white/80" />
        </div>
        <div data-reveal className={`${reveal} relative z-10 mx-auto max-w-[1100px] overflow-hidden rounded-[22px] bg-card text-card-foreground shadow-[0_30px_80px_rgba(0,0,0,.2)]`}>
          <div className="border-b-2 border-border px-5 pt-12 pb-9 text-center max-md:pt-9 max-md:pb-7">
            <h2 className="text-[clamp(3.7rem,8.5vw,8rem)] leading-[.95] font-black tracking-[-.105em] max-md:text-[15vw]">INNOVER</h2>
            <p className="mt-3 text-[clamp(1.4rem,3vw,3rem)] font-medium tracking-[-.055em]">Marketing</p>
          </div>
          <div className="px-[13%] py-14 text-center max-md:px-[8%] max-md:py-10">
            <p className="mx-auto max-w-[670px] text-base leading-8 text-foreground/85 max-md:text-sm max-md:leading-7">Transformamos ideias em presença. Cada projeto une estratégia, comunicação e uma identidade visual que aproxima sua marca das pessoas certas.</p>
            <a href="mailto:ola@innover.com.br" className="mt-8 inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm font-bold transition-all hover:gap-5">Vamos conversar <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      {/* <section className="bg-muted px-[7vw] py-32 text-foreground max-md:px-[6vw] max-md:py-20">
        <div data-reveal className={`${reveal} mx-auto mb-20 max-w-[1280px] text-center max-md:mb-14 max-md:text-left`}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest">O que fazemos</p>
          <h2 className="text-[clamp(3rem,6vw,6rem)] leading-[.98] font-extrabold tracking-[-.09em] max-md:text-[12vw]">Ideias que viram<br />resultado.</h2>
        </div>
        <div className="mx-auto max-w-[1050px] border-b-2 border-border">
          {["Estratégia de marca", "Identidade visual", "Direção de arte", "Experiências digitais"].map((service, index) => <div data-reveal key={service} className={`${reveal} grid grid-cols-[12%_1fr_auto] items-center border-t-2 border-border py-6 max-md:grid-cols-[16%_1fr_auto] max-md:py-5`}><span className="text-xs">0{index + 1}</span><h3 className="text-[clamp(1.2rem,2.5vw,2.1rem)] font-bold tracking-[-.07em]">{service}</h3><span className="text-xl">↗</span></div>)}
        </div>
      </section> */}

      <section id="projetos" className="relative bg-background px-[7vw] pt-32 pb-32 max-md:px-[6vw] max-md:pt-20 max-md:pb-20">
        <div aria-hidden="true" className="absolute top-0 right-[5.5vw] h-32 border-r-2 border-border max-md:right-[6vw] max-md:h-20" />
        <div data-reveal className={`${reveal} relative left-[-7vw] mb-10 flex w-screen items-center gap-4 whitespace-nowrap text-2xl max-md:left-[-6vw] max-md:mb-7 max-md:gap-2 max-md:text-lg`}>
          <span className="h-0.5 flex-1 bg-border" /><span>Portfólio</span><span className="h-0.5 w-[8vw] shrink-0 bg-border max-md:w-[6vw]" />
        </div>
        <div className="mx-auto grid max-w-[1280px] grid-cols-[2fr_1fr] gap-8 max-md:block">
          {projects.map((project, index) => <article data-reveal key={project.title} className={`${reveal} group bg-card p-6 shadow-[0_8px_28px_rgba(23,27,32,.08)] transition-shadow hover:shadow-[0_24px_55px_rgba(23,27,32,.16)] max-md:mb-6 max-md:p-4 ${index === 2 ? "col-span-2 ml-[24%] w-[76%] max-md:ml-0 max-md:w-full" : ""}`}>
            {/* A imagem é conteúdo, enquanto toda a composição usa utilitários Tailwind. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="overflow-hidden bg-muted">
              <img src={project.image} alt={`Projeto ${project.title}`} className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${index === 0 ? "h-[clamp(290px,39vw,570px)]" : index === 1 ? "h-[clamp(290px,31vw,460px)]" : "h-[clamp(260px,29vw,420px)]"} max-md:h-[66vw]`} />
            </div>
            <div className="grid grid-cols-[12%_1fr_auto] pt-5 max-md:grid-cols-[15%_1fr_auto]"><span className="text-xs text-foreground/55">0{index + 1}</span><div><h3 className="text-xl font-bold tracking-[-.045em]">{project.title}</h3><p className="mt-1 text-xs text-foreground/60">{project.type}</p></div><span className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span></div>
          </article>)}
        </div>
      </section>

      <section className="relative min-h-[65vh] overflow-hidden bg-primary px-[7vw] py-32 text-primary-foreground max-md:min-h-[500px] max-md:px-[6vw] max-md:py-20">
        <p data-reveal className={`${reveal} text-xs font-semibold uppercase tracking-widest`}>Nossa premissa</p>
        <p data-reveal className={`${reveal} relative z-10 mt-44 max-w-[970px] text-[clamp(3.2rem,7vw,7rem)] leading-[.93] font-extrabold tracking-[-.1em] max-md:mt-28 max-md:text-[13vw]`}>Uma boa marca não pede atenção. Ela <span className="text-white/60">cria conexão.</span></p>
        <div aria-hidden="true" className="absolute right-[-7vw] bottom-[-16vw] h-[34vw] min-h-[290px] w-[34vw] min-w-[290px] rounded-full bg-[#828b90] max-md:right-[-24vw] max-md:bottom-[-22vw] max-md:h-[72vw] max-md:w-[72vw]" />
      </section>

    </main>
  );
}
