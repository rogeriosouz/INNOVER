/** biome-ignore-all lint/a11y/useSemanticElements: <explanation> */
/** biome-ignore-all lint/a11y/useAriaPropsSupportedByRole: <explanation> */
import Image from "next/image";
import { HeroAnimations } from "./hero-animations";
import SiteHeader from "./site-header";

const technologies = [
	{
		name: "Next.js",
		detail: "Websites rápidos",
		icon: "/tech-next.svg",
		position: "left-0 top-[4%] sm:-left-4 sm:top-[10%]",
		iconTone: "bg-white/10",
	},
	{
		name: "Figma",
		detail: "Design de interface",
		icon: "/tech-figma.svg",
		position: "right-0 top-[34%] sm:-right-4",
		iconTone: "bg-[#aebeff]/15",
	},
	{
		name: "React",
		detail: "Experiências web",
		icon: "/tech-react.svg",
		position: "bottom-[4%] left-[4%] sm:bottom-[8%]",
		iconTone: "bg-[#82bfd6]/15",
	},
];

const ticker = [
	"Criação de sites",
	"Identidade visual",
	"Landing pages",
	"Social media",
	"Next.js",
	"Tailwind CSS",
];

function HeroTicker() {
	return (
		<div
			role="region"
			aria-label="Serviços e tecnologias"
			data-hero-ticker-region
			className="group w-full min-w-0 overflow-hidden border-y border-white/30 py-3 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)] lg:col-span-2 lg:row-start-2"
		>
			<div data-hero-ticker className="flex w-max">
				{[0, 1].map((copy) => (
					<div
						key={copy}
						aria-hidden={copy === 1}
						className="flex shrink-0 items-center gap-8 pr-8"
					>
						{ticker.map((item) => (
							<span
								key={item}
								className="flex shrink-0 items-center gap-8 whitespace-nowrap text-xs font-bold uppercase tracking-[.14em] text-white/80"
							>
								{item}
								<span
									aria-hidden="true"
									className="h-1.5 w-1.5 rounded-full bg-white/60"
								/>
							</span>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default function HeroSection() {
	return (
		<section
			id="inicio"
			className="relative isolate w-full overflow-hidden bg-[linear-gradient(112deg,#0b1018_12%,#111b29_58%,#2a3b55_135%)] text-white"
		>
			<HeroAnimations />
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-40 top-24 h-[650px] w-[650px] rounded-full bg-white/5 blur-3xl"
			/>

			<SiteHeader />

			<div className="relative z-10 mx-auto grid w-[88%] max-w-[1400px] items-center gap-x-14 gap-y-10 pb-8 pt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:gap-y-8">
				<div className="min-w-0 lg:col-start-1 lg:row-start-1">
					<p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-white/65">
						<span className="h-px w-8 shrink-0 bg-white/55" />
						Design e desenvolvimento para negócios
					</p>
					<h1 className="max-w-[800px] text-[clamp(3rem,5.7vw,7rem)] font-black leading-[.94] tracking-[-.08em]">
						Seu trabalho merece ser{" "}
						<span className="text-white/50">bem apresentado.</span>
					</h1>
					<p className="mt-7 max-w-[570px] text-sm leading-7 text-white/70 md:text-base">
						Crio sites, identidades e materiais digitais para quem precisa
						explicar melhor o que faz e facilitar o primeiro contato.
					</p>
					<div className="mt-9 flex flex-wrap items-center gap-5">
						<a
							href="#contato"
							className="inline-flex min-h-14 items-center justify-center gap-6 rounded-full bg-[#aebeff] px-6 py-3 text-sm font-black text-[#0b1018] transition-[transform,background-color] hover:-translate-y-1 hover:bg-[#cad3ff]"
						>
							Vamos conversar <span aria-hidden="true">↗</span>
						</a>
						<a
							href="#projetos"
							className="border-b border-white/60 pb-1 text-sm font-bold transition-colors hover:text-white/60"
						>
							Ver projetos
						</a>
					</div>
				</div>

				<HeroTicker />

				<div
					aria-label="Apresentação do estúdio Innover e tecnologias utilizadas"
					className="relative mx-auto aspect-square w-full max-w-[500px] min-w-0 lg:col-start-2 lg:row-start-1"
				>
					<div
						aria-hidden="true"
						className="absolute inset-[6%] rounded-full border border-white/15 shadow-[0_0_70px_rgba(174,190,255,.08)]"
					/>
					<div
						aria-hidden="true"
						data-hero-orbit
						className="absolute inset-[15%] rounded-full border border-dashed border-white/20"
					/>
					<div
						aria-hidden="true"
						data-hero-sphere
						className="absolute inset-[17%] flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#aebeff]/25 bg-[linear-gradient(155deg,#324760_0%,#1b2b40_43%,#0e1827_100%)] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,.16),0_28px_65px_rgba(0,0,0,.4),0_0_55px_rgba(174,190,255,.09)] sm:rounded-[34px] sm:p-6"
					>
						<div className="pointer-events-none absolute inset-0 opacity-[.09] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:30px_30px]" />
						<div className="pointer-events-none absolute -right-14 top-[25%] h-44 w-44 rounded-full bg-[#aebeff]/20 blur-[50px]" />
						<div className="pointer-events-none absolute right-5 top-1/3 h-20 w-20 rounded-full border border-[#aebeff]/20" />
						<div className="relative z-10 flex items-center justify-between gap-2 border-b border-white/15 pb-3">
							<div className="flex min-w-0 items-center gap-2">
								<span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] border border-[#aebeff]/45 bg-[#aebeff]/15 text-lg font-black leading-none tracking-[-.12em] text-white">
									I<span className="text-[#aebeff]">.</span>
								</span>
								<span className="min-w-0 text-[8px] font-extrabold uppercase leading-[1.4] tracking-[.14em] text-white/90">
									Innover <span className="text-[#aebeff]">/</span> Studio
									<span className="block text-[7px] font-medium tracking-[.16em] text-white/45">Estúdio digital</span>
								</span>
							</div>
							<span className="shrink-0 text-[8px] font-bold tracking-[.12em] text-[#aebeff]/80">01 / 03</span>
						</div>
						<div className="relative z-10">
							<span className="mb-3 hidden items-center gap-1.5 rounded-full border border-[#aebeff]/25 sm:inline-flex bg-[#aebeff]/10 px-2.5 py-1 text-[7px] font-bold uppercase tracking-[.12em] text-[#d6dfff]">
								<span className="h-1.5 w-1.5 rounded-full bg-[#aebeff] shadow-[0_0_8px_#aebeff]" />
								Ideias em movimento
							</span>
							<p className="text-[clamp(1.65rem,3.4vw,3rem)] font-black leading-[.94] tracking-[-.085em] text-white">
								Design<span className="text-[#aebeff]">.</span>
								<span className="mt-1 block text-[#aebeff]">Código<span className="text-white">.</span></span>
							</p>
							<p className="mt-3 hidden max-w-[220px] text-[10px] font-medium leading-[1.55] text-white/60 min-[400px]:block sm:text-xs">
								Do conceito à experiência digital.
							</p>
						</div>
						<div className="relative z-10 flex items-end justify-between gap-2 border-t border-white/15 pt-3">
							<div>
								<span className="block text-[8px] font-extrabold uppercase tracking-[.17em] text-white/85">Forma + função</span>
								<span className="mt-1 hidden text-[8px] text-white/45 sm:block">Detalhes que fazem diferença</span>
							</div>
							<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#aebeff]/35 bg-[#aebeff]/10 text-lg leading-none text-[#aebeff]">↗</span>
						</div>
					</div>
					{technologies.map((tech) => (
						<div
							key={tech.name}
							data-tech-float
							className={`group/tech absolute z-10 ${tech.position}`}
						>
							<div className="relative flex min-w-[156px] items-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-[#1d2a3a]/90 p-2.5 pr-4 shadow-[0_12px_35px_rgba(0,0,0,.28)] backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-500 ease-out group-hover/tech:scale-[1.035] group-hover/tech:border-[#aebeff]/55 group-hover/tech:shadow-[0_18px_38px_rgba(0,0,0,.34)] motion-reduce:transition-none">
								<span
									className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 ${tech.iconTone}`}
								>
									<Image
										src={tech.icon}
										alt=""
										width={32}
										height={32}
										className="h-8 w-8 transition-transform duration-500 group-hover/tech:scale-105 motion-reduce:transition-none"
									/>
								</span>
								<span className="relative min-w-0">
									<strong className="block text-xs font-bold tracking-[.01em]">
										{tech.name}
									</strong>
									<small className="mt-1 block text-[10px] text-white/60">
										{tech.detail}
									</small>
								</span>
								<span
									aria-hidden="true"
									className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#aebeff]"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
