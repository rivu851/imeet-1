import AboutSection from "@/components/home/AboutSection";
import Countdown from "@/components/home/Countdown";
import Effects from "@/components/home/Effects";
import EventHighlights from "@/components/events/EventHighlights";
import HeroSection from "@/components/home/HeroSection";
import HodDeskPage from "@/components/hod-desk/HodDeskPage";
import Marquee from "@/components/home/Marquee";
import Pillars from "@/components/home/Pillars";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import RegisterSection from "@/components/signup/RegisterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <HodDeskPage />
        <Marquee />
        <EventHighlights />
        <Pillars />
        <Countdown />
        <RegisterSection />
      </main>
      <Footer />
      <Effects />
    </>
  );
}
