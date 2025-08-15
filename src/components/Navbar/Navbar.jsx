"use client";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ETIC from "../../../public/etic.png";
import { ContactButton } from "./ContactButton";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
return (
   <div className="w-full px-4 sticky top-4">
      <div className="relative text-base  text-black mx-auto w-full flex justify-between items-center bg-white rounded-full py-[14px] px-8 m-4 max-w-[1000px] max-md:bg-inherit transition duration-100 md:shadow-[0_16px_32px_0px_rgba(0,0,0,0.08)]">
        <Image src={ETIC} className="w-[50px] max-sm:hidden" alt="" />

        <div className="sm:hidden z-[2] size-[50px] relative">
          <Image
            src={ETIC}
            className={
              "max-w-[50px] absolute duration-300 z-[1] left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2"
            }
            style={{
              opacity: isOpen ? 0 : 1,
            }}
            width={1000}
            height={1000}
            alt=""
          />
          <Image
            src={"/LOGO_ETIC_BLANC.png"}
            className="w-[50px] absolute  z-[0] left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        {/* Desktop Navbar */}
        <nav className="max-sm:hidden font-medium max-lg:text-sm">
          <ul className="flex items-center gap-6 max-lg:gap-4 ">
            {links.map((link) => {
              return (
                <li
                  key={link.name}
                  style={{ fontWeight: "500" }}
                  className="group relative cursor-pointer"
                  onClick={() => {
                    const element = document.getElementById(link.url);
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {link.name}
                  <div
                    className={
                      "absolute w-0 h-[1px] rounded-full top-full bg-black group-hover:w-full duration-300  "
                    }
                  />
                </li>
              );
            })}
          </ul>
        </nav>
        {/*Mobile Navbar*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="py-[8px] px-6 font-medium sm:hidden rounded-full z-[1]"
          style={{backgroundColor: isOpen ? "#fff" : "#000", color: isOpen ? "#000" : "#fff"}}
        >
          Menu
        </button>
        <AnimatePresence>{isOpen && <MobileNav />}</AnimatePresence>

        <ContactButton />
      </div>
    </div>
  );
};

export const MobileNav = () => {
  const router = useRouter();
  return (
    <>
      <motion.div
        initial={{
          width: 0,
          height: "100%",
        }}
        animate={{
          width: "100%",
          height: "450px",
        }}
        exit={{
          x: "100%",
        }}
        transition={{
          width: { duration: 0.4 },
          height: { duration: 0.6, delay: 0.4, ease: easeIn },
        }}
        className=" text-white  absolute top-0 right-0 bg-black w-full sm:hidden overflow-clip rounded-2xl px-4"
      >
        <nav className="mt-20 font-medium">
          <ul className=" flex flex-col p-4  gap-6 max-lg:gap-4">
            {links.map((link) => {
              const selected = link.url === router.asPath;
              return (
                <li
                  key={link.name}
                  style={{ fontWeight: selected ? "600" : "500" }}
                  className="group relative w-fit"
                  onClick={() => {
                    const element = document.getElementById(link.url);
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {link.name}
                  <div
                    className={
                      "absolute w-0 h-[1px] rounded-full top-full bg-white group-hover:w-full duration-300  "
                    }
                    style={{
                      width: selected ? "100%" : null,
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="grid grid-cols-2 gap-4 p-4 pb-6 mt-4">
          <div className="flex items-center gap-2">
            <Image
              src={"/socialmedia/facebook.svg"}
              alt="X"
              height={20}
              width={20}
            />
            <p>Facebook</p>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={"/socialmedia/linkedin.svg"}
              alt="X"
              height={20}
              width={20}
            />
            <p>LinkedIn</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/socialmedia/instagram.svg"}
              alt="X"
              height={20}
              width={20}
            />
            <p>Instagram</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={"/socialmedia/x.svg"} alt="X" height={20} width={20} />
            <p>Twitter</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export const links = [
  {
    name: "Accueil",
    url: "/",
  },
  {
    name: "À propos",
    url: "apropos",
  },
  {
    name: "Articles",
    url: "writers",
  },
  {
    name: "Nos Évenements",
    url: "events",
  },
  {
    name: "Contact",
    url: "contact",
  },
];
