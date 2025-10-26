import Nav from "@/components/common/Nav";
import Hero from "@/components/blocks/Hero";
import Services from "@/components/blocks/Services";
import Portfolio from "@/components/blocks/Portfolio";
import RecentInstalls from "@/components/blocks/RecentInstalls";
import Pricing from "@/components/blocks/Pricing";
import Process from "@/components/blocks/Process";
import CTA from "@/components/blocks/CTA";
import Footer from "@/components/blocks/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <RecentInstalls />
        <Pricing />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
