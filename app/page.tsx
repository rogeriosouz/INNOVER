"use client";

import { useEffect, useState } from "react";

const reveal = "opacity-0 translate-y-8 transition-all duration-700 ease-out data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0";

const projects = [
  { title: "Casa Aurora", type: "Branding · E-commerce", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85" },
  { title: "Forma Studio", type: "Direção de arte · Editorial", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85" },
  { title: "Maré Alta", type: "Identidade · Digital", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85" },
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
      <header className="absolute top-8 left-[5.5vw] right-[5.5vw] z-50 flex h-16 items-center justify-between rounded-[22px] border-2 border-white/85 px-7 text-white max-md:top-5 max-md:left-[6vw] max-md:right-[6vw] max-md:h-14 max-md:px-4">
        <a href="#inicio" className="text-2xl font-black tracking-[-.12em] max-md:text-xl" aria-label="Innover, ir para o início">INNOVER<span className="text-sm font-semibold tracking-[-.07em]">.com</span></a>
        <button type="button" className="relative z-50 hidden flex-col gap-1.5 p-2 max-md:flex" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          <span className="h-0.5 w-6 bg-white" /><span className="h-0.5 w-6 bg-white" />
        </button>
        <nav className={`flex w-[69%] items-center justify-around text-sm font-semibold max-md:fixed max-md:inset-0 max-md:z-40 max-md:w-full max-md:flex-col max-md:justify-center max-md:gap-8 max-md:bg-primary max-md:text-3xl ${menuOpen ? "max-md:flex" : "max-md:hidden"}`}>
          {[["Home", "#inicio"], ["Sobre", "#sobre"], ["Portfólio", "#projetos"], ["Contato", "#contato"]].map(([label, link]) => <a key={link} href={link} className="transition-opacity hover:opacity-60" onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
      </header>

      <section id="inicio" className="relative flex min-h-screen items-center justify-center bg-[linear-gradient(105deg,#11161c_12%,#1b2027_54%,#5f6a70_120%)] px-[8vw] pt-24 text-white max-md:min-h-[670px]">
        <div aria-hidden="true" className="absolute inset-y-0 left-[5.5vw] w-0 border-l-2 border-white/75 max-md:left-[6vw]" />
        <h1 className="relative z-10 text-center text-[clamp(4rem,8vw,8.7rem)] leading-[1.06] font-black tracking-[-.09em] max-md:text-[15vw]"><span className="block">UM TÍTULO</span><span className="block">CHAMATIVO</span></h1>
      </section>

      <section id="sobre" className="relative bg-[linear-gradient(105deg,#12171c,#5d676d)] px-[7vw] pt-32 pb-32 text-white max-md:px-[6vw] max-md:pt-20 max-md:pb-20">
        <div aria-hidden="true" className="absolute inset-y-0 left-[5.5vw] border-l-2 border-white/75 max-md:left-[6vw]" />
        <div aria-hidden="true" className="absolute top-32 right-[5.5vw] bottom-0 border-r-2 border-white/70 max-md:top-20 max-md:right-[6vw]" />
        <div data-reveal className={`${reveal} relative left-[-7vw] z-10 mb-10 flex w-screen items-center gap-4 whitespace-nowrap text-2xl max-md:left-[-6vw] max-md:mb-7 max-md:gap-2 max-md:text-lg`}>
          <span className="h-0.5 w-[21vw] shrink-0 bg-white/80 max-md:w-[18vw]" /><span>Sobre</span><span className="h-0.5 flex-1 bg-white/80" />
        </div>
        <div data-reveal className={`${reveal} relative z-10 mx-auto max-w-[1100px] overflow-hidden rounded-lg bg-card text-card-foreground`}>
          <div className="border-b-2 border-border px-5 pt-12 pb-8 text-center max-md:pt-9 max-md:pb-6">
            <h2 className="text-[clamp(3.7rem,8.5vw,8rem)] leading-[.88] font-black tracking-[-.13em] max-md:text-[15vw]">INNOVER</h2>
            <p className="mt-5 text-[clamp(1.4rem,3vw,3rem)] font-medium tracking-[-.07em]">Marketing</p>
          </div>
          <div className="px-[13%] py-12 text-center max-md:px-[8%] max-md:py-9">
            <p className="mx-auto max-w-[700px] text-base leading-7 max-md:text-sm">Transformamos ideias em presença. Cada projeto une estratégia, comunicação e uma identidade visual que aproxima sua marca das pessoas certas.</p>
            <a href="#contato" className="mt-7 inline-block border-b border-foreground pb-1 text-sm font-bold">Conheça nosso processo ↗</a>
          </div>
        </div>
      </section>

      <section className="bg-muted px-[7vw] py-32 text-foreground max-md:px-[6vw] max-md:py-20">
        <div data-reveal className={`${reveal} mx-auto mb-20 max-w-[1280px] text-center max-md:mb-14 max-md:text-left`}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest">O que fazemos</p>
          <h2 className="text-[clamp(3rem,6vw,6rem)] leading-[.98] font-extrabold tracking-[-.09em] max-md:text-[12vw]">Ideias que viram<br />resultado.</h2>
        </div>
        <div className="mx-auto max-w-[1050px] border-b-2 border-border">
          {["Estratégia de marca", "Identidade visual", "Direção de arte", "Experiências digitais"].map((service, index) => <div data-reveal key={service} className={`${reveal} grid grid-cols-[12%_1fr_auto] items-center border-t-2 border-border py-6 max-md:grid-cols-[16%_1fr_auto] max-md:py-5`}><span className="text-xs">0{index + 1}</span><h3 className="text-[clamp(1.2rem,2.5vw,2.1rem)] font-bold tracking-[-.07em]">{service}</h3><span className="text-xl">↗</span></div>)}
        </div>
      </section>

      <section id="projetos" className="relative bg-background px-[7vw] pt-32 pb-32 max-md:px-[6vw] max-md:pt-20 max-md:pb-20">
        <div aria-hidden="true" className="absolute top-0 right-[5.5vw] h-32 border-r-2 border-border max-md:right-[6vw] max-md:h-20" />
        <div data-reveal className={`${reveal} relative left-[-7vw] mb-10 flex w-screen items-center gap-4 whitespace-nowrap text-2xl max-md:left-[-6vw] max-md:mb-7 max-md:gap-2 max-md:text-lg`}>
          <span className="h-0.5 flex-1 bg-border" /><span>Portfólio</span><span className="h-0.5 w-[8vw] shrink-0 bg-border max-md:w-[6vw]" />
        </div>
        <div className="mx-auto grid max-w-[1280px] grid-cols-[2fr_1fr] gap-8 max-md:block">
          {projects.map((project, index) => <article data-reveal key={project.title} className={`${reveal} bg-card p-6 max-md:mb-6 max-md:p-4 ${index === 2 ? "col-span-2 ml-[24%] w-[76%] max-md:ml-0 max-md:w-full" : ""}`}>
            {/* A imagem é conteúdo, enquanto toda a composição usa utilitários Tailwind. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={`Projeto ${project.title}`} className={`w-full object-cover ${index === 0 ? "h-[clamp(290px,39vw,570px)]" : index === 1 ? "h-[clamp(290px,31vw,460px)]" : "h-[clamp(260px,29vw,420px)]"} max-md:h-[66vw]`} />
            <div className="grid grid-cols-[12%_1fr_auto] pt-4 max-md:grid-cols-[15%_1fr_auto]"><span className="text-xs">0{index + 1}</span><div><h3 className="text-xl font-bold tracking-[-.06em]">{project.title}</h3><p className="mt-1 text-xs">{project.type}</p></div><span>↗</span></div>
          </article>)}
        </div>
      </section>

      <section className="relative min-h-[65vh] overflow-hidden bg-primary px-[7vw] py-32 text-primary-foreground max-md:min-h-[500px] max-md:px-[6vw] max-md:py-20">
        <p data-reveal className={`${reveal} text-xs font-semibold uppercase tracking-widest`}>Nossa premissa</p>
        <p data-reveal className={`${reveal} relative z-10 mt-44 max-w-[970px] text-[clamp(3.2rem,7vw,7rem)] leading-[.93] font-extrabold tracking-[-.1em] max-md:mt-28 max-md:text-[13vw]`}>Uma boa marca não pede atenção. Ela <span className="text-white/60">cria conexão.</span></p>
        <div aria-hidden="true" className="absolute right-[-7vw] bottom-[-16vw] h-[34vw] min-h-[290px] w-[34vw] min-w-[290px] rounded-full bg-[#828b90] max-md:right-[-24vw] max-md:bottom-[-22vw] max-md:h-[72vw] max-md:w-[72vw]" />
      </section>

      <footer id="contato" className="bg-background px-[7vw] pt-20 pb-8 text-foreground max-md:px-[6vw]">
        <div data-reveal className={`${reveal} flex min-h-72 justify-between max-md:min-h-64 max-md:flex-col`}><p className="text-xs font-semibold uppercase tracking-widest">Vamos criar algo memorável?</p><a href="mailto:ola@innover.com.br" className="self-center border-b-[3px] border-border pb-1 text-[clamp(2rem,5vw,5rem)] font-extrabold tracking-[-.09em] max-md:self-start">olá@innover.com ↗</a></div>
        <div className="grid grid-cols-3 items-end border-t-2 border-border pt-5 text-xs max-md:grid-cols-2 max-md:gap-4"><a href="#inicio" className="text-2xl font-black tracking-[-.12em]">INNOVER<span className="text-sm font-semibold">.com</span></a><p className="text-center max-md:text-right">© 2026 Innover</p><div className="flex justify-end gap-4 max-md:col-span-2 max-md:justify-start"><a href="#contato">Instagram</a><a href="#contato">LinkedIn</a></div></div>
      </footer>
    </main>
  );
}
