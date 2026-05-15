import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ProblemsSection from "@/components/ProblemsSection";
import ServiceBridgeSection from "@/components/ServiceBridgeSection";
import FeaturesSection from "@/components/FeaturesSection";
import SmallCommunitySection from "@/components/SmallCommunitySection";
import CauseSolutionSection from "@/components/CauseSolutionSection";
import ProgramSection from "@/components/ProgramSection";
import WhyNowSection from "@/components/WhyNowSection";
import CurriculumSection from "@/components/CurriculumSection";
import BonusSection from "@/components/BonusSection";
import HowToSection from "@/components/HowToSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import InstructorSection from "@/components/InstructorSection";
import NotForYouSection from "@/components/NotForYouSection";
import PurchaseSection from "@/components/PurchaseSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ProblemsSection />
        <ServiceBridgeSection />
        <FeaturesSection />
        <SmallCommunitySection />
        <WhyNowSection />
        <CauseSolutionSection />
        <ProgramSection />
        <CurriculumSection />
        <BonusSection />
        <HowToSection />
        <BeforeAfterSection />
        <InstructorSection />
        <NotForYouSection />
        <PurchaseSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
