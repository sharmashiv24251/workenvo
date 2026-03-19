import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import CapabilityLoop from "@/components/landing/CapabilityLoop";
import ProductSection from "@/components/landing/ProductSection";
import ProofCard from "@/components/landing/ProofCard";
import ESGSection from "@/components/landing/ESGSection";
import OutcomesSection from "@/components/landing/OutcomesSection";
import Differentiation from "@/components/landing/Differentiation";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <CapabilityLoop />
      <ProductSection />
      <ProofCard />
      <ESGSection />
      <OutcomesSection />
      <Differentiation />
      <FinalCTA />
      <Footer />
    </main>
  );
}
