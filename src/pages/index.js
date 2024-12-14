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
import Preloader from "@/components/Preloader";
import QuePensent from "@/components/QuePensent/QuePensent";

import { AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import ContactSection from "@/components/Contact/Contact";

// const satoshiRegular = localFont({
//   src: "./fonts/Satoshi-Regular.woff",
//   variable: "--font-satoshi-regular",
//   weight: "100 900",
// });

export default function Home() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)

      }
    )()
  }, [])



  return (
    // <div className="font-satoshi font-bold text-8xl uppercase">Bon courage</div>
    <div className="font-satoshi font-bold text-8xl flex flex-col gap-32 overflow-hidden">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Herosection />
      <Decouvrez />
      <Evenements />
      <Slider />
      <Writers />
      <QuePensent />
      <FAQ />
      
      <Footer />
    </div>
  );
}
