import Image from "next/image";
import localFont from "next/font/local";
import Evenements from "@/components/Evenements/Evenements";
import { Navbar } from "@/components/Navbar/Navbar";
import Herosection from "@/components/Hero-Section/Hero-section";
import Titresection from "@/components/Titre-section/Titre-section";
import Decouvrez from "@/components/Decouvrez-ETIC/Decouvrez-ETIC";
import FAQ from "@/components/Faq/FAQ";
import Slider from "@/components/Confiance/Slider";
import Footer from "@/components/Footer/Footer";
import Writers from "@/components/Writers/Writers";

// const satoshiRegular = localFont({
//   src: "./fonts/Satoshi-Regular.woff",
//   variable: "--font-satoshi-regular",
//   weight: "100 900",
// });

export default function Home() {
  return (
    // <div className="font-satoshi font-bold text-8xl uppercase">Bon courage</div>
    <div className="font-satoshi font-bold text-8xl flex flex-col px-9 gap-24 overflow-hidden">
      <Navbar />
      <Herosection />
      <Decouvrez />
      <Evenements />
      <Slider />
      <FAQ />
      <Footer />
      {/* <Writers /> */}
    </div>
  );
}
