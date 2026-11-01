import AboutSection from "@/components/home/AboutSection";
import Countdown from "@/components/home/Countdown";
import Effects from "@/components/home/Effects";
import EventCategories from "@/components/events/EventCategories";
import HeroSection from "@/components/home/HeroSection";
import HodDeskPage from "@/components/hod-desk/HodDeskPage";
import Marquee from "@/components/home/Marquee";
import Pillars from "@/components/home/Pillars";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* one petal layer over the hero and the about section, so the petals drift from one into the other */}
        <div className="relative">
          <HeroSection />
          <AboutSection />
          <div id="layer-leaves" className="pointer-events-none absolute inset-0 z-10 overflow-hidden"></div>
        </div>
        <HodDeskPage />
        <Marquee />
        <EventCategories />
        <Pillars />
        <Countdown />
      </main>
      <Footer />
      <Effects />
    </>
  );
}
