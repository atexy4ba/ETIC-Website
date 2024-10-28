import Image from "next/image";
import localFont from "next/font/local";
import Evenements from "@/components/Evenements/Evenements";

// const satoshiRegular = localFont({
//   src: "./fonts/Satoshi-Regular.woff",
//   variable: "--font-satoshi-regular",
//   weight: "100 900",
// });

export default function Home() {
  return (
    // <div className="font-satoshi font-bold text-8xl uppercase">Bon courage</div>
    <div>
      <Evenements />
    </div>
  );
}
