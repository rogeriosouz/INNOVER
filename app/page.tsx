import AboutSection from "./components/about-section";
import { AudienceSection } from "./components/audience-section";
import { ContactSection } from "./components/contact-section";
import { ContentReveals } from "./components/content-reveals";
import { FaqSection } from "./components/faq-section";
import HeroSection from "./components/hero-section";
import { ProcessSection } from "./components/process-section";
import { PossibilitiesSection } from "./components/possibilities-section";
import ProjectsSection from "./components/projects-section";
import ServicesSection from "./components/services-section";
import { SiteJourney } from "./components/site-journey";
import { SiteFooter } from "./components/site-footer";
import { StatementSection } from "./components/statement-section";
import { logout } from "./login/actions";
import { hasValidSession } from "./lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  if (!(await hasValidSession())) {
    redirect("/login");
  }

  return (
    <main className="relative">
      <form action={logout} className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
        <button
          type="submit"
          className="rounded-full border border-white/20 bg-slate-950/70 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur transition hover:bg-slate-800"
        >
          Sair
        </button>
      </form>
      <SiteJourney />
      <ContentReveals />
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <ServicesSection />
      <ProjectsSection />
      <PossibilitiesSection />
      <ProcessSection />
      <StatementSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
