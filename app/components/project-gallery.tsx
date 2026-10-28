"use client";

import { createLayout } from "animejs";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./scroll-reveal";

type Project = {
  number: string;
  title: string;
  category: string;
  coverText: string;
  coverClass: string;
  motif: "ring" | "frame" | "lines";
};

const projects: Project[] = [
  { number: "01", title: "Identidade tipográfica", category: "Marca", coverText: "FORMA\nÉ MENSAGEM.", coverClass: "bg-[#c9c3b6] text-[#171b20]", motif: "ring" },
  { number: "02", title: "Interface editorial", category: "Web", coverText: "CLARO\nDESDE O INÍCIO.", coverClass: "bg-[#a99ec4] text-[#171b20]", motif: "frame" },
  { number: "03", title: "Página de lançamento", category: "Landing page", coverText: "UMA IDEIA\nGANHA ESPAÇO.", coverClass: "bg-[#aebbb2] text-[#171b20]", motif: "lines" },
  { number: "04", title: "Portfólio de serviços", category: "Web", coverText: "O TRABALHO\nEM FOCO.", coverClass: "bg-[#d0b39e] text-[#171b20]", motif: "frame" },
  { number: "05", title: "Sistema de marca", category: "Identidade", coverText: "UM SINAL\nQUE FICA.", coverClass: "bg-[#354454] text-[#f4f4f1]", motif: "ring" },
  { number: "06", title: "Site institucional", category: "Web", coverText: "MENOS RUÍDO.\nMAIS CLAREZA.", coverClass: "bg-[#b4c2c9] text-[#171b20]", motif: "lines" },
  { number: "07", title: "Conteúdo em série", category: "Social", coverText: "RITMO\nE REPETIÇÃO.", coverClass: "bg-[#d2c5aa] text-[#171b20]", motif: "ring" },
  { number: "08", title: "Página de produto", category: "Landing page", coverText: "O ESSENCIAL\nPRIMEIRO.", coverClass: "bg-[#78889c] text-[#f4f4f1]", motif: "frame" },
  { number: "09", title: "Campanha digital", category: "Campanha", coverText: "ALGO NOVO\nCOMEÇA AQUI.", coverClass: "bg-[#c8b7cc] text-[#171b20]", motif: "lines" },
];

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (source: HTMLElement, project: Project) => void }) {
  const artStyle = index === 8
    ? "max-w-full text-[clamp(1.7rem,6.8vw,5.2rem)] sm:max-w-[88%] sm:pl-[4%]"
    : project.motif === "frame"
      ? "ml-auto max-w-[82%] border-l border-current/35 pl-5 text-[clamp(2rem,5vw,5.2rem)]"
      : project.motif === "lines"
        ? "max-w-[82%] pl-[7%] text-[clamp(2rem,5vw,5.2rem)]"
        : "max-w-[90%] text-[clamp(2rem,5vw,5.2rem)]";

  return (
    <article data-project-card data-layout-id={`project-${project.number}`} className="group/project relative min-w-0">
      <div data-project-cover data-layout-id={`project-${project.number}-cover`} className={`relative flex h-[300px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 p-6 shadow-[0_14px_45px_rgba(0,0,0,.18)] transition-[transform,box-shadow] duration-500 ease-out group-hover/project:-translate-y-1 group-hover/project:shadow-[0_25px_55px_rgba(0,0,0,.25)] motion-reduce:transition-none sm:h-[370px] sm:p-8 lg:h-[400px] ${project.coverClass}`}>
        {project.motif === "ring" && <div aria-hidden="true" className="pointer-events-none absolute -right-[13%] top-[10%] aspect-square w-[65%] rounded-full border-[clamp(30px,6vw,70px)] border-current opacity-10 transition-transform duration-700 ease-out group-hover/project:rotate-3 group-hover/project:scale-105 motion-reduce:transition-none" />}
        {project.motif === "frame" && <div aria-hidden="true" className="pointer-events-none absolute inset-[12%] border-[clamp(8px,1.6vw,20px)] border-current opacity-10 transition-transform duration-700 ease-out group-hover/project:-translate-x-1 group-hover/project:translate-y-1 motion-reduce:transition-none" />}
        {project.motif === "lines" && <div aria-hidden="true" className={`pointer-events-none absolute inset-y-0 border-x border-current opacity-20 transition-transform duration-700 ease-out group-hover/project:translate-x-2 motion-reduce:transition-none ${index === 8 ? "right-[7%] w-[12%]" : "right-[15%] w-[24%]"}`} />}
        <div className="relative flex justify-between gap-4 border-b border-current/30 pb-4 text-[10px] font-bold uppercase tracking-[.18em] sm:text-xs">
          <span>Estudo visual / {project.category}</span><span>{project.number} / 09</span>
        </div>
        <p data-layout-id={`project-${project.number}-art`} className={`relative whitespace-pre-line font-black leading-[.9] tracking-[-.09em] transition-transform duration-500 ease-out group-hover/project:-translate-y-1 motion-reduce:transition-none ${artStyle}`}>{project.coverText}</p>
        <div className="relative flex items-center justify-between gap-4 border-t border-current/30 pt-4 text-[10px] font-semibold uppercase tracking-[.16em] sm:text-xs">
          <span>INNOVER / Exploração</span>
          <span aria-hidden="true" className="text-lg transition-transform duration-500 group-hover/project:translate-x-1 group-hover/project:-translate-y-1 motion-reduce:transition-none">↗</span>
        </div>
      </div>
      <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-5 pt-5">
        <h3 data-layout-id={`project-${project.number}-title`} className="text-lg font-semibold tracking-[-.04em] transition-colors duration-300 group-hover/project:text-[#aebeff] sm:text-xl">{project.title}</h3>
        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[.14em] text-white/45">{project.category}</span>
      </div>
      <p data-project-detail data-layout-id={`project-${project.number}-detail`} className="mt-5 text-sm leading-7 text-white/65">
        Estudo visual demonstrativo de {project.category.toLowerCase()}. Uma exploração de linguagem e apresentação, não um projeto realizado para cliente.
      </p>
      <button
        data-project-open
        type="button"
        aria-label={`Abrir detalhes de ${project.title}`}
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aebeff]"
        onClick={(event) => {
          const source = event.currentTarget.closest<HTMLElement>("[data-project-card]");
          if (source) onOpen(source, project);
        }}
      />
    </article>
  );
}

export function ProjectGallery() {
  const [showAll, setShowAll] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<ReturnType<typeof createLayout> | null>(null);
  const activeSourceRef = useRef<HTMLElement | null>(null);
  const busyRef = useRef(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    const dialog = dialogRef.current;
    const modalContent = modalContentRef.current;
    if (!dialog) return;
    layoutRef.current = createLayout(dialog, {
      children: "[data-layout-id]",
      properties: ["--overlay-alpha"],
      duration: 650,
      ease: "inOut(3)",
    });
    return () => {
      layoutRef.current?.revert();
      layoutRef.current = null;
      if (dialog.open) dialog.close();
      activeSourceRef.current?.classList.remove("project-is-open");
      modalContent?.replaceChildren();
      activeSourceRef.current = null;
      busyRef.current = false;
    };
  }, []);

  function openProject(source: HTMLElement, project: Project) {
    const dialog = dialogRef.current;
    const content = modalContentRef.current;
    if (!dialog || !content || dialog.open || busyRef.current) return;

    const clone = source.cloneNode(true) as HTMLElement;
    clone.querySelector("[data-project-open]")?.remove();
    content.replaceChildren(clone);
    dialog.setAttribute("aria-label", `Detalhes de ${project.title}`);
    activeSourceRef.current = source;
    busyRef.current = true;

    const update = () => {
      dialog.showModal();
      source.classList.add("project-is-open");
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !layoutRef.current) {
      update();
      busyRef.current = false;
      dialog.querySelector<HTMLElement>("[data-project-close]")?.focus();
      return;
    }
    layoutRef.current.update(update).then(() => {
      busyRef.current = false;
      dialog.querySelector<HTMLElement>("[data-project-close]")?.focus();
    });
  }

  function closeProject() {
    const dialog = dialogRef.current;
    const source = activeSourceRef.current;
    if (!dialog?.open || !source || busyRef.current) return;
    busyRef.current = true;
    const update = () => {
      dialog.close();
      source.classList.remove("project-is-open");
      source.querySelector<HTMLElement>("[data-project-open]")?.focus();
    };
    const finish = () => {
      modalContentRef.current?.replaceChildren();
      activeSourceRef.current = null;
      busyRef.current = false;
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !layoutRef.current) {
      update();
      finish();
      return;
    }
    layoutRef.current.update(update).then(finish);
  }

  return (
    <div>
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-7 lg:gap-y-14">
        {visibleProjects.map((project, index) => (
          <ScrollReveal
            key={project.number}
            variant="card"
            delay={index % 2 === 0 ? 0 : 80}
            className={index === 8 ? "lg:col-span-8 lg:col-start-3" : index % 4 === 0 || index % 4 === 3 ? "lg:col-span-7" : "lg:col-span-5"}
          >
            <ProjectCard project={project} index={index} onOpen={openProject} />
          </ScrollReveal>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        data-project-modal
        className="fixed inset-0 m-auto h-dvh max-h-none w-screen max-w-none overflow-y-auto border-0 p-5 text-white sm:p-10"
        onCancel={(event) => { event.preventDefault(); closeProject(); }}
        onClick={(event) => {
          if (!(event.target as HTMLElement).closest("[data-project-card], [data-project-close]")) closeProject();
        }}
      >
        <div className="mx-auto flex min-h-full w-full max-w-[1000px] flex-col justify-center py-12">
          <div data-project-modal-header className="mb-5 flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[.18em] text-white/55">
            <span>INNOVER / Estudo visual</span>
            <button data-project-close type="button" onClick={closeProject} className="min-h-11 rounded-full border border-white/30 px-5 text-white transition-colors hover:border-[#aebeff] hover:bg-[#aebeff]/10 hover:text-[#aebeff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aebeff]">Fechar ✕</button>
          </div>
          <div ref={modalContentRef} />
        </div>
      </dialog>
      <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-7 sm:flex-row sm:items-center">
        <p className="text-xs font-semibold uppercase tracking-[.16em] text-white/50" aria-live="polite">
          Mostrando {visibleProjects.length} de {projects.length} estudos
        </p>
        {!showAll && (
          <button type="button" onClick={() => setShowAll(true)} className="group/button inline-flex min-h-12 items-center gap-8 rounded-full border border-[#aebeff]/45 bg-[#aebeff]/10 px-6 text-sm font-bold text-[#dbe3ff] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#aebeff] hover:text-[#0b1018] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aebeff]">
            Ver mais 5 estudos <span aria-hidden="true" className="transition-transform group-hover/button:translate-y-1 motion-reduce:transition-none">↓</span>
          </button>
        )}
      </div>
    </div>
  );
}
