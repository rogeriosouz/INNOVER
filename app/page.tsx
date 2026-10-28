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

export default function Home() {
  return (
    <main className="relative">
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
