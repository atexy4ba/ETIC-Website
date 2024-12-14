import photo3 from "./image/img3.jpg";
import photo2 from "./image/img2.jpg";
import photo1 from "./image/img1.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Decouvrez() {
  const [isVisible, setIsVisible] = useState({
    photo1: false,
    photo2: false,
    photo3: false,
  });
  const imgRefs = [useRef(null), useRef(null), useRef(null)];
  const variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  const photo1Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === imgRefs[0].current)
            setIsVisible((prev) => ({ ...prev, photo1: true }));
          if (entry.target === imgRefs[1].current)
            setIsVisible((prev) => ({ ...prev, photo2: true }));
          if (entry.target === imgRefs[2].current)
            setIsVisible((prev) => ({ ...prev, photo3: true }));
        } else {
          if (entry.target === imgRefs[0].current)
            setIsVisible((prev) => ({ ...prev, photo1: false }));
          if (entry.target === imgRefs[1].current)
            setIsVisible((prev) => ({ ...prev, photo2: false }));
          if (entry.target === imgRefs[2].current)
            setIsVisible((prev) => ({ ...prev, photo3: false }));
        }
      });
    });
    imgRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      imgRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
    [imgRefs];
  }, []);

  return (
    <div className=" mx-auto px-5 md:px-24 " id="apropos">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 ">
        <div className="flex flex-col justify-between">
          <h1
            className="font-satoshi font-bold md:text-[60px] text-4xl md:leading-[65px] pb-5 "
            style={{ color: "#212121" }}
          >
            Découvrez avec nous <span style={{ color: "#EB9223" }}>ETIC</span>
          </h1>

          <p
            className="font-satoshi font-normal text-sm md:text-base leading-relaxed "
            style={{ color: "#2D2D2D" }}
          >
            ETIC est une organisation estudiantine à but non lucratif ayant vu
            le jour en 2009 à l École nationale supérieure d informatique (ex:
            INI). Sa mission première consiste à rapprocher les étudiants du
            monde professionnel et de du monde professionnel et de{" "}
          </p>
        </div>

        <motion.div
          ref={imgRefs[2]}
          initial="hidden"
          animate={isVisible.photo3 ? "visible" : "hidden"}
          exit="exit"
          variants={variants}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <Image
            src={photo3}
            alt="Photo 3"
            layout="responsive"
            className="w-full h-auto "
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 ">
        <div className="flex flex-col gap-11   ">
          <div className=" flex-1 order-2 md:order-1">
            <motion.div
              ref={imgRefs[0]}
              initial="hidden"
              animate={isVisible.photo1 ? "visible" : "hidden"}
              exit="exit"
              variants={photo1Variants}
              transition={{ duration: 1 }}
              className="w-full h-auto rounded flex-1 order-2 md:order-1"
            >
              <Image
                src={photo1}
                alt="Photo 1"
                layout="responsive"
                className="w-full h-auto "
              />
            </motion.div>{" "}
          </div>
          <div className=" flex-1 order-1 md:order-2">
            <p
              className="font-satoshi font-normal text-sm md:text-base leading-relaxed "
              style={{ color: "#2D2D2D" }}
            >
              ETIC est une organisation estudiantine à but non lucratif ayant vu
              le jour en 2009 à l École nationale supérieure d informatique (ex:
              INI). Sa mission première consiste à rapprocher les étudiants du
              monde professionnel et de du monde professionnel et de ETIC est
              une organisation estudiantine à but non lucratif ayant vu le jour
              en 2009 à l École nationale supérieure d informatique (ex: INI).
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-11 ">
          <div className=" flex-1">
            <p
              className="font-satoshi font-normal text-sm md:text-base leading-relaxed "
              style={{ color: "#2D2D2D" }}
            >
              ETIC est une organisation estudiantine à but non lucratif ayant vu
              le jour en 2009 à l École nationale supérieure d informatique (ex:
              INI). Sa mission première consiste à rapprocher les étudiants du
              monde professionnel et de du monde professionnel et de ETIC est
              une organisation estudiantine à but non lucratif ayant vu le jour
              en 2009 à l École nationale supérieure d informatique (ex: INI).
              Sa mission première consiste à rapprocher les étudiants du
            </p>
          </div>
          <div className=" flex-1">
            <motion.div
              ref={imgRefs[1]}
              initial="hidden"
              animate={isVisible.photo2 ? "visible" : "hidden"}
              exit="exit"
              variants={variants}
              transition={{ duration: 1 }}
              className="w-full h-auto rounded flex-1"
            >
              <Image
                src={photo2}
                alt="Photo 2"
                layout="responsive"
                className="w-full h-auto "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decouvrez;
