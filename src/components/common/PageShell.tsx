import type { ReactNode } from "react";
import Effects from "@/components/home/Effects";
import SmoothScroll from "@/components/home/SmoothScroll";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Effects />
      <SmoothScroll />
    </>
  );
}
