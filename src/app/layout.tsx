import type { Metadata } from "next";
import { Anton, IBM_Plex_Mono, Inter, Noto_Serif_JP, Rajdhani } from "next/font/google";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./icons.css";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

// personal-use licence, see public/fonts/Readme.txt
const shuriken = localFont({
  src: "../../public/fonts/The Last Shuriken.ttf",
  variable: "--font-shuriken",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  weight: ["400", "600"],
  preload: false,
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMEET 2026",
  description: "Departmental fest of IT, RCCIIT | Inspire · Innovate · Impact",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${shuriken.variable} ${anton.variable} ${inter.variable} ${notoSerifJp.variable} ${rajdhani.variable} ${plexMono.variable}`}
    >
      <body className="bg-midnight font-body text-moon antialiased">{children}</body>
    </html>
  );
}
