import React from "react";

const Local = () => {
  return (
    <div className="font-satoshi bg-black flex lg:flex-row flex-col items-center lg:items-start text-center lg:text-left p-10 md:p-12 lg:p-16 text-white w-5/6 self-center rounded-xl gap-10">
      <div className="lg:w-[450px] lg:h-[300px] md:w-[350px] md:h-[250px] w-[200px] h-[150px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.7296401896406!2d3.1713406752984863!3d36.70503417305923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e522f3f317461%3A0x215c157a5406653c!2sEcole%20Nationale%20Sup%C3%A9rieure%20d&#39;Informatique%20(Ex.%20INI)!5e0!3m2!1sfr!2sdz!4v1735313071295!5m2!1sfr!2sdz"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "10px" }}
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex flex-col gap-10">
        <h1 className="text-2xl md:text-xl lg:text-5xl">
          Visiter notre <br />
          local ETICien.
        </h1>
        <p className="text-base md:text-lg font-normal">
          Vous pouvez venir nous visiter et découvrir nos activités.
        </p>
      </div>
    </div>
  );
};

export default Local;
