/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
return (
   <div className="flex flex-col bg-[#141516] relative rounded-[1.5rem]">
    <div className="flex flex-col text-white  gap-8 w-full px-5 py-16 md:px-24 md:py-20">
      <div className="logo-wehdo flex md:hidden items-center gap-8">
        <Image src={"/LOGO_ETIC_BLANC.png"} width={50} height={50} alt="zz" />
        <Image
          src={"/octenium-logo.png"}
          width={150}
          height={70}
          alt="Octenium Logo"
        />
      </div>
      <div className="logo-wehdo md:flex items-center gap-8 hidden">
        <Image
          src={"/LOGO_ETIC_BLANC.png"}
          width={70}
          height={70}
          alt="ETIC Logo"
        />
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
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("apropos");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Découvrez ETIC
                </div>
                <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("events");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Nos événements
                  <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
                </div>
              </li>
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("confiance");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Nos partenaires
                </div>
                <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("writers");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  ETIC Writers
                </div>
                <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("faq");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Foire aux questions
                </div>
                <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact
                </div>
                <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 text-lg w-1/3">
          <div className="flex flex-col gap-8">
            <h1>Réseaux sociaux</h1>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/etic_club/" target="_blank">
                <FaInstagram size={40} />
              </Link>
              <Link href="https://www.facebook.com/ETIC.Club/" target="_blank">
                <FaFacebook size={40} />
              </Link>
              <Link
                href="https://dz.linkedin.com/company/etic-club"
                target="_blank"
              >
                <FaLinkedin size={40} />
              </Link>
              <Link href="https://www.tiktok.com/@etic.club" target="_blank">
                <FaTiktok size={40} />
              </Link>
            </div>
          </div>
          <div
            className="w-full flex justify-end lg:justify-normal"
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <button className="text-sm px-7 py-4 font-satoshi rounded-3xl flex items-center text-black gap-3 bg-white transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]">
              Nous contacter
              <FaArrowRightLong />
            </button>
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
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("apropos");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Découvrez ETIC
                </div>
                <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("events");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Nos événements
                </div>
                <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("confiance");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Nos partenaires
                </div>
                <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("writers");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  ETIC Writers
                </div>
                <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("faq");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Foire aux questions
                </div>
                <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer w-fit">
                <div
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact
                </div>
                <div className="absolute w-0 h-[1px] rounded-full top-full left-0 bg-white duration-300 group-hover:w-full" />
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h1>Réseaux sociaux</h1>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/etic_club/"
                  target="_blank"
                >
                  <FaInstagram size={25} />
                </Link>
                <Link
                  href="https://www.facebook.com/ETIC.Club/"
                  target="_blank"
                >
                  <FaFacebook size={25} />
                </Link>
                <Link
                  href="https://dz.linkedin.com/company/etic-club"
                  target="_blank"
                >
                  <FaLinkedin size={25} />
                </Link>
                <Link href="https://www.tiktok.com/@etic.club" target="_blank">
                  <FaTiktok size={25} />
                </Link>
              </div>
            </div>
            <div className="w-full flex justify-end lg:justify-normal">
              <button
                className="text-sm px-6 py-4 font-satoshi rounded-3xl flex items-center text-black gap-3 bg-white transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Nous contacter
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=" bg-[#141516] relative overflow-hidden hidden md:block h-[30rem] ">
      {/* Large overflowing text */}
      <div className="absolute inset-0 flex items-center justify-center mb-20">
        <h1 className="text-white text-[150px] leading-none tracking-tight whitespace-nowrap select-none font-satoshi">
          {"WE ACT FOR IMPACT".split("").map((ch, idx) => (
            <span
              key={idx}
              className="inline-block transition-all duration-300 transform-gpu will-change-transform hover:-translate-y-2 hover:filter hover:drop-shadow-[0_0_25px_#ffffff]"
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>
      </div>

      {/* Floating badges */}
      <div className="relative z-10 h-screen font-satoshi text-[20px] pointer-events-none">
        {/* Entrepreneuriat - Yellow badge */}
        <div className="absolute top-[7.5rem] left-[13.8rem] bg-[#F0C614] text-black px-4 py-1.5 rounded-full text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_#F0C614] pointer-events-auto">
          Entrepreneuriat
        </div>

        {/* Communication - Teal badge */}
        <div className="absolute top-[6.5rem] right-[44rem] bg-teal-400 text-black px-4 py-1.5 rounded-full text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_#2dd4bf] pointer-events-auto">
          Communication
        </div>

        {/* Startup - Gray badge */}
        <div className="absolute top-[16.1rem] left-[16.9rem] bg-[#CFCFCF] text-black px-3 py-1.5 rounded-full text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_#CFCFCF] pointer-events-auto">
          Startup
        </div>

        {/* Informatique - Dark badge */}
        <div className="absolute top-[12rem] right-[21rem] bg-[#141516] text-white px-4 py-1.5 rounded-full text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_#141516] pointer-events-auto">
          Informatique
        </div>

        {/* Etudiants - Red badge */}
        <div className="absolute top-[16.5rem] right-[37rem] bg-[#C6131F] text-white px-4 py-1.5 rounded-full text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_#C6131F] pointer-events-auto">
          Etudiants
        </div>
      </div>
    </div>
   </div>
  );
}
