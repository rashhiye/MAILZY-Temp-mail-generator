import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
