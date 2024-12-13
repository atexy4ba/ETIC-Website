/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex items-center justify-center w-full p-10 gap-24">
      <div className="w-48 h-auto">
        <img src="/etic.png" alt="etic" />
      </div>

      <div className="w-48 h-auto">
        <img src="octenium-logo.png" alt="octenium" />
      </div>
    </div>
  );
}
