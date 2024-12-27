import React from "react";
import Card from "./Card";
import TitreSection from "../Titre-section/Titre-section";

const data = [
  {
    tags: [
      { name: "Technologie", color: "yellow" },
      { name: "Communication", color: "blue" },
    ],
    image: "/writers/Frame37.png",
    titre: "Comment gérer les études et le freelance en parallèle ?",
    auteur: "Manil RABIA",
    dureeLecture: 5,
  },
  {
    tags: [
      { name: "Technologie", color: "yellow" },
      { name: "Communication", color: "blue" },
    ],
    image: "/writers/Frame37.png",
    titre: "Comment gérer les études et le freelance en parallèle ?",
    auteur: "Manil RABIA",
    dureeLecture: 5,
  },
  {
    tags: [
      { name: "Technologie", color: "yellow" },
      { name: "Communication", color: "blue" },
    ],
    image: "/writers/Frame37.png",
    titre: "Comment gérer les études et le freelance en parallèle ?",
    auteur: "Manil RABIA",
    dureeLecture: 5,
  },
];

const Writers = () => {
  return (
    <div className="flex flex-col px-5 md:px-24 gap-6">
      <TitreSection
        h1={"We Write"}
        span={"For Impact"}
        p={
          "ETIC organise une variété d'événements tels que des conférences, des ateliers et des rencontres avec des professionnels de divers secteurs. Ces initiatives visent à enrichir les connaissances des étudiants, à développer leurs compétences pratiques et à les préparer aux exigences du marché du travail."
        }
        color={"#F0C614"}
      />
      <div className="flex md:flex-row flex-col gap-6 justify-between">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Writers;
