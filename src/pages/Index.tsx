import { SaleBanner } from "@/components/SaleBanner";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/CategorySection";
import { QualitySection } from "@/components/QualitySection";
import { NowAvailableSection } from "@/components/NowAvailableSection";
import { FeaturedCapsulesSection } from "@/components/FeaturedCapsulesSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { ShopAllSection } from "@/components/ShopAllSection";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BioLongevity Labs | Research Peptides for Sale - USA Made, Third Party Tested</title>
        <meta 
          name="description" 
          content="Buy USA-manufactured, third-party tested research peptides. 99%+ purity guarantee, GMP manufacturing standards. CJC 1295, Ipamorelin, and 150+ research peptides. Free shipping over $400." 
        />
        <meta name="keywords" content="research peptides, peptides for sale, USA peptides, CJC 1295, Ipamorelin, bioregulators, peptide capsules, peptide vials" />
        <link rel="canonical" href="https://biolongevitylabs.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <SaleBanner />
        <Header />
        <main>
          <HeroSection />
          <CategorySection />
          <QualitySection />
          <NowAvailableSection />
          <FeaturedCapsulesSection />
          <AboutSection />
          <FAQSection />
          <ShopAllSection />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </>
  );
};

export default Index;
