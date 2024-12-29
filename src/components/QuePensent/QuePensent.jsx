import React, { useState, useEffect } from "react";
import TitreSection from "../Titre-section/Titre-section";
import Testimonial from "./Testimonial";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi"; // Add Heroicons right arrow

const QuePensent = () => {
  const testimonials = [
    {
      text: "This project felt like a true collaboration and we've enjoyed both the process and the output. I especially want to thank the team for taking us on in a lean fashion.",
      author: "Aniss Bessalah",
      role: "Respo Dev",
      photo: "https://via.placeholder.com/150",
    },
    {
      text: "ETIC m'a fait confiance. Je lui en serai éternellement reconnaissant.",
      author: "Samy Ouanès",
      role: "Membre actif",
      photo: "https://via.placeholder.com/150",
    },
    {
      text: "On ne quitte jamais vraiment ETIC. C’est un esprit qui vous habite, des amitiés qui perdurent.",
      author: "Racim Zennadi",
      role: "Alumni",
      photo: "/testimonial/racim.jpeg",
    },

    {
      text: "INCROYABLE.",
      author: "Touria Djafour",
      role: "Vice Présidente",
      photo: "/testimonial/touria.png",
    },
    {
      text: "Rejoindre ETIC ? KI GHAYA !",
      author: "Dounia Habib",
      role: "Membre",
      photo: "/testimonial/dounia.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    console.log("test");
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col px-5 md:px-24">
      <TitreSection
        h1={"L'avis de Nos"}
        span={"ETICiens"}
        p={
          "Découvrez les avis des ETICiens, qui partagent leur expérience entre projets, apprentissages et fun."
        }
        color={"#EB9223"}
      />

      <div className="flex  md:flex-row mt-6 items-center md:h-[50vh] h-[30vh]">
        <div className="sliderrrr md:w-[80%] md:p-4">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Testimonial testimonial={testimonials[currentIndex]} />
          </motion.div>
        </div>
        <div className="w-[20%] hidden md:flex justify-center items-start">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="bg-orange rounded-full w-20 h-20 flex justify-center items-center"
          >
            <HiArrowRight className="text-white w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default QuePensent;
