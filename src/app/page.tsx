import About from "@/components/imeet/About";
import Countdown from "@/components/imeet/Countdown";
import Effects from "@/components/imeet/Effects";
import Events from "@/components/imeet/Events";
import Footer from "@/components/imeet/Footer";
import Gallery from "@/components/imeet/Gallery";
import Header from "@/components/imeet/Header";
import Hero from "@/components/imeet/Hero";
import HodsDesk from "@/components/imeet/HodsDesk";
import Marquee from "@/components/imeet/Marquee";
import Pillars from "@/components/imeet/Pillars";
import Register from "@/components/imeet/Register";
import SmoothScroll from "@/components/imeet/SmoothScroll";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Marquee />
        <Pillars />
        <Events />
        <Countdown />
        <HodsDesk />
        <Gallery />
        <Register />
      </main>
      <Footer />
      <Effects />
      <SmoothScroll />
    </>
  );
}
