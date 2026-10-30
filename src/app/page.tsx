import AboutSection from "@/components/home/AboutSection";
import Countdown from "@/components/home/Countdown";
import Effects from "@/components/home/Effects";
import EventHighlights from "@/components/events/EventHighlights";
import Gallery from "@/components/home/Gallery";
import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import Pillars from "@/components/home/Pillars";
import SmoothScroll from "@/components/home/SmoothScroll";
import HodsDesk from "@/components/hod-desk/HodsDesk";
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
        <Marquee />
        <Pillars />
        <EventHighlights />
        <Countdown />
        <HodsDesk />
        <Gallery />
        <RegisterSection />
      </main>
      <Footer />
      <Effects />
      <SmoothScroll />
    </>
  );
}
