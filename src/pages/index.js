import Image from "next/image";
import localFont from "next/font/local";
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
    <div className="font-satoshi font-bold text-8xl flex flex-col px-9 gap-10 overflow-hidden">
      <Navbar />
      <Herosection />
      <Decouvrez />
      <Titresection
        h1={"Ils nous ont fait"}
        span={"confiance"}
        p={
          "ETIC bénéficie du soutien de nombreux partenaires de renom, qui contribuent à renforcer ses actions en rapprochant les étudiants du monde professionnel. Grâce à ces collaborations, ETIC offre aux étudiants un accès privilégié à des opportunités et des rencontres enrichissantes pour leur avenir."
        }
        color={"#269122FF"}
      />
    </div>
  );
}
