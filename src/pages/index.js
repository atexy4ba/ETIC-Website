import Image from "next/image";
import localFont from "next/font/local";
import Herosection from "@/components/Hero-Section/Hero-section"; 
import Titresection from "@/components/Titre-section/Titre-section";
import Eticwriters from "@/components/Etic-writers/Etic-writers";

// const satoshiRegular = localFont({
//   src: "./fonts/Satoshi-Regular.woff",
//   variable: "--font-satoshi-regular",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <div className="mt-10">
    <Titresection 
      h1={ <>
             We Write<br/>   
           </> 
        } 
      span={ <>
              For Impact 
           </> 
        }

      Color= 'text-yellow'

      p={ <>
              ETIC organise une variété d'événements tels que des conférences,
               des ateliers et des rencontres<br/> avec des professionnels de divers secteurs. 
               Ces initiatives visent à enrichir les connaissances des<br/> étudiants, à développer 
               leurs compétences pratiques et à les préparer aux exigences du marché<br/> du travail.
           </> 
        } 
     />

     <Eticwriters/>
    </div> 
  );
}
