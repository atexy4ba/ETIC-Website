/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-col text-white bg-black gap-8 w-full px-5 py-16 md:px-24 md:py-20">
      <div className="logo-wehdo flex md:hidden items-center gap-8">
        <Image src={"/etic_blanc.svg"} width={50} height={50} alt="ETIC Logo" />
        <Image
          src={"/octenium-logo.png"}
          width={150}
          height={70}
          alt="Octenium Logo"
        />
      </div>
      <div className="logo-wehdo md:flex items-center gap-8 hidden">
        <Image src={"/etic_blanc.svg"} width={70} height={70} alt="ETIC Logo" />
        <Image
          src={"/octenium-logo.png"}
          width={150}
          height={70}
          alt="Octenium Logo"
        />
      </div>

      <div className="w-full md:flex hidden">
        <div className="w-1/3 flex flex-col justify-between">
          <p className="text-base leading-relaxed text-white font-normal">
            ETIC, un club estudiantin un club estudiantin un club estudiantin un
            club estudiantin ETIC, un club estudiantin un club estudiantin un{" "}
          </p>
          <div className="text-lg font text-[#5F5F5F]">
            <p>© 2024 - ETIC</p>
            <p>Ecole Nationale Supérieure d’Informatique</p>
          </div>
        </div>

        <div className="w-1/3 flex justify-center">
          <div className="text-lg flex flex-col gap-8">
            <h1>Sitemap</h1>
            <ul className="font-normal flex flex-col gap-1">
              <li>
                <Link href="/decouvrez-etic">Découvrez ETIC</Link>
              </li>
              <li>
                <Link href="/nos-evenements">Nos événements</Link>
              </li>
              <li>
                <Link href="/nos-partenaires">Nos partenaires</Link>
              </li>
              <li>
                <Link href="/eticiens">ETICiens</Link>
              </li>
              <li>
                <Link href="/faq">Foire aux questions</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 text-lg w-1/3">
          <div className="flex flex-col gap-8">
            <h1>Réseaux sociaux</h1>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com" target="_blank">
                <FaInstagram size={40} />
              </Link>
              <Link href="https://www.facebook.com" target="_blank">
                <FaFacebook size={40} />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <FaLinkedin size={40} />
              </Link>
              <Link href="https://www.tiktok.com" target="_blank">
                <FaTiktok size={40} />
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-end lg:justify-normal">
            <Link href="/contact">
              <button className="text-sm px-7 py-4 font-satoshi rounded-3xl flex items-center text-black gap-3 bg-white">
                Nous contacter
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex md:hidden flex-col gap-10 mt-4 text-base">
        <p className="text-sm leading-relaxed w-[90%] text-white font-normal">
          ETIC, un club estudiantin un club estudiantin un club estudiantin un
          club estudiantin ETIC, un club estudiantin un club estudiantin un{" "}
        </p>

        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h1>Sitemap</h1>
            <ul className="font-normal text-sm flex flex-col gap-2">
              <li>
                <Link href="#decouvrez">Découvrez ETIC</Link>
              </li>
              <li>
                <Link href="#nos-evenements">Nos événements</Link>
              </li>
              <li>
                <Link href="#nos-partenaires">Nos partenaires</Link>
              </li>
              <li>
                <Link href="#eticiens">ETICiens</Link>
              </li>
              <li>
                <Link href="#faq">Foire aux questions</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h1>Réseaux sociaux</h1>
              <div className="flex gap-4">
                <Link href="https://www.instagram.com" target="_blank">
                  <FaInstagram size={25} />
                </Link>
                <Link href="https://www.facebook.com" target="_blank">
                  <FaFacebook size={25} />
                </Link>
                <Link href="https://www.linkedin.com" target="_blank">
                  <FaLinkedin size={25} />
                </Link>
                <Link href="https://www.tiktok.com" target="_blank">
                  <FaTiktok size={25} />
                </Link>
              </div>
            </div>
            <div className="w-full flex justify-end lg:justify-normal">
            <Link href="/contact">
              <button className="text-sm px-6 py-4 font-satoshi rounded-3xl flex items-center text-black gap-3 bg-white">
                Nous contacter
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
          </div>
        </div>
      </div>


      
    </div>
  );
}
