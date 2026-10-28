"use client";

import { useState } from "react";

const links = [
	["Sobre", "#sobre"],
	["Serviços", "#servicos"],
	["Projetos", "#projetos"],
	["Processo", "#processo"],
];

export default function SiteHeader() {
	const [open, setOpen] = useState(false);

	return (
		<header className="relative z-50 mx-auto mt-5 flex h-16 w-[88%] max-w-[1400px] items-center justify-between rounded-[22px] border border-white/20 bg-[#111a26]/85 px-6 text-white shadow-xl backdrop-blur-xl md:mt-9 md:px-8">
			<a
				href="#inicio"
				className="text-xl font-black tracking-[-.09em] md:text-2xl"
				aria-label="Innover, voltar ao início"
			>
				INNOVER
				<span className="text-sm font-semibold tracking-[-.04em]">.com</span>
			</a>
			<button
				type="button"
				className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/30 lg:hidden"
				aria-label={open ? "Fechar menu" : "Abrir menu"}
				aria-controls="site-nav"
				aria-expanded={open}
				onClick={() => setOpen(!open)}
			>
				<span className="h-0.5 w-5 bg-white" />
				<span className="h-0.5 w-5 bg-white" />
			</button>
			<nav
				id="site-nav"
				aria-label="Menu principal"
				className={`${open ? "flex" : "hidden"} absolute top-[calc(100%+8px)] right-0 left-0 flex-col gap-1 rounded-[20px] border border-white/20 bg-[#172231] p-4 text-sm font-semibold shadow-2xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
			>
				{links.map(([label, href]) => (
					<a
						key={href}
						href={href}
						onClick={() => setOpen(false)}
						className="rounded-xl px-3 py-3 transition-colors hover:bg-white/10 lg:px-0 lg:py-2 lg:hover:bg-transparent lg:hover:text-white/60"
					>
						{label}
					</a>
				))}
				<a
					href="#contato"
					onClick={() => setOpen(false)}
					className="mt-2 rounded-full bg-[#aebeff] px-5 py-3 text-center text-xs font-black uppercase tracking-[.08em] text-[#0b1018] transition-colors hover:bg-[#cad3ff] lg:mt-0"
				>
					Vamos conversar ↗
				</a>
			</nav>
		</header>
	);
}
