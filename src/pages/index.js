import Image from "next/image";
import localFont from "next/font/local";
import Herosection from "@/components/Hero-Section/Hero-section"; 
import Titresection from "@/components/Titre-section/Titre-section";

// const satoshiRegular = localFont({
//   src: "./fonts/Satoshi-Regular.woff",
//   variable: "--font-satoshi-regular",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <div>
      <Herosection/>
    </div> 
  );
}
