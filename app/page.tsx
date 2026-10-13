"use client";

import { useEffect, useState } from "react";

const projects = [
  { number: "01", title: "Casa Aurora", type: "Branding · E-commerce", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85", className: "project-large" },
  { number: "02", title: "Forma Studio", type: "Direção de arte · Editorial", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85", className: "project-tall" },
  { number: "03", title: "Mare Alta", type: "Identidade · Digital", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85", className: "project-wide" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.16 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <main>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="NOVA, ir para o início">NOVA<span>.</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu"><i></i><i></i></button>
      <nav className={menuOpen ? "nav is-open" : "nav"}>{[["Início", "#inicio"], ["Sobre", "#sobre"], ["Projetos", "#projetos"], ["Contato", "#contato"]].map(([label, link]) => <a href={link} key={link} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
    </header>
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true"></div><p className="eyebrow hero-kicker">Estúdio criativo independente <span>·</span> São Paulo</p>
      <div className="hero-title-wrap"><h1><span>Ideias que</span><em>ganham forma.</em></h1><p className="hero-copy">Criamos identidades, experiências e presenças digitais para marcas que querem deixar sua marca.</p></div>
      <a href="#projetos" className="scroll-cue"><span>Role para descobrir</span><b>↓</b></a><div className="hero-index">01 — 04</div>
    </section>
    <section className="intro section" id="sobre">
      <div className="section-label reveal"><span>( 01 )</span><span>Sobre nós</span></div>
      <div className="intro-content reveal"><p className="display-copy">Não fazemos só o que parece bonito. Criamos o que <em>faz sentido</em> e permanece.</p><div className="intro-bottom"><p>Somos um estúdio de design e comunicação que transforma conceitos em universos visuais vivos. Da estratégia ao último detalhe, cada projeto nasce de uma conversa boa e de uma vontade enorme de fazer diferente.</p><a className="text-link" href="#contato">Conheça nosso processo <span>↗</span></a></div></div>
    </section>
    <section className="services"><div className="services-heading reveal"><p className="eyebrow">O que movemos</p><h2>Estratégia encontra<br /><em>expressão.</em></h2></div><div className="services-list">{["Estratégia de marca", "Identidade visual", "Direção de arte", "Experiências digitais"].map((service, index) => <div className="service-row reveal" key={service}><span>0{index + 1}</span><h3>{service}</h3><b>↗</b></div>)}</div></section>
    <section className="work section" id="projetos"><div className="section-label reveal"><span>( 02 )</span><span>Projetos selecionados</span><a href="#contato">Ver todos ↗</a></div><div className="project-grid">{projects.map((project) => <article className={`project ${project.className} reveal`} key={project.number}><div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div><div className="project-info"><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.type}</p></div><b>↗</b></div></article>)}</div></section>
    <section className="manifesto"><p className="eyebrow reveal">Nossa premissa</p><p className="manifesto-text reveal">Uma boa marca não pede atenção. Ela <em>cria conexão.</em></p><div className="orb reveal" aria-hidden="true"></div></section>
    <footer id="contato"><div className="footer-top reveal"><p className="eyebrow">Vamos criar algo memorável?</p><a href="mailto:ola@novastudio.com.br">olá@nova.studio <span>↗</span></a></div><div className="footer-bottom"><a className="brand" href="#inicio">NOVA<span>.</span></a><p>© 2026 Nova Studio</p><div><a href="#">Instagram</a><a href="#">LinkedIn</a></div></div></footer>
  </main>;
}
