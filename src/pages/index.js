import Image from "next/image";
import localFont from "next/font/local";
import Evenements from "@/components/Evenements/Evenements";
import { Navbar } from "@/components/Navbar/Navbar";
import Herosection from "@/components/Hero-Section/Hero-section";
import Titresection from "@/components/Titre-section/Titre-section";
import Decouvrez from "@/components/Decouvrez-ETIC/Decouvrez-ETIC";

// const satoshiRegular = localFont({
//   src: "./fonts/Satoshi-Regular.woff",
//   variable: "--font-satoshi-regular",
//   weight: "100 900",
// });

export default function Home() {
  return (
    // <div className="font-satoshi font-bold text-8xl uppercase">Bon courage</div>
    <div className="font-satoshi font-bold text-8xl flex flex-col px-9 gap-10 overflow-hidden">
      <Navbar />
      <Herosection />
      <Decouvrez />
      <Titresection
        h1={"Explorez nos"}
        span={"événements"}
        p={
          "ETIC organise une variété d'événements tels que des conférences, des ateliers et des rencontres avec des professionnels de divers secteurs. Ces initiatives visent à enrichir les connaissances des étudiants, à développer leurs compétences pratiques et à les préparer aux exigences du marché du travail."
        }
        color={"#EB9223"}
      />
      <Evenements />
    </div>
  );
}
