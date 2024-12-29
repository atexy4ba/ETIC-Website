import React from "react";
import TitreSection from "../Titre-section/Titre-section";

const Slider = () => {
  return (
    <div className="flex flex-col gap-10 px-5 md:px-24" id="confiance">
      <TitreSection
        h1={"Ils nous ont fait"}
        span={"confiance"}
        p={
          "ETIC bénéficie du soutien de nombreux partenaires de renom, qui contribuent à renforcer ses actions en rapprochant les étudiants du monde professionnel. Grâce à ces collaborations, ETIC offre aux étudiants un accès privilégié à des opportunités et des rencontres enrichissantes pour leur avenir."
        }
        color={"#20B3AD"}
      />
      <div>
        <div className="wrapper" data-group="1">
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
        </div>

        <div className="wrapper" data-group="2">
          <div className="logoRight logo"></div>
          <div className="logoRight logo"></div>
          <div className="logoRight logo"></div>
          <div className="logoRight logo"></div>
          <div className="logoRight logo"></div>
          <div className="logoRight logo"></div>
        </div>

        <div className="wrapper" data-group="3">
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
          <div className="logoLeft logo"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
