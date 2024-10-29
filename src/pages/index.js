import Image from "next/image";
import localFont from "next/font/local";
import Decouvrez from "@/components/Decouvrez-ETIC/Decouvrez-ETIC";
// const satoshiRegular = localFont({
//   src: "./fonts/Satoshi-Regular.woff",
//   variable: "--font-satoshi-regular",
//   weight: "100 900",
// });

export default function Home() {
  return (<div>
    <div className="font-satoshi font-bold text-8xl uppercase">Bon courage</div>
    <Decouvrez/></div>
  );
}
