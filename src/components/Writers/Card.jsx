/* eslint-disable @next/next/no-img-element */
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={data.image} alt="article de ETIC" />
      <div className="flex flex-row gap-6">
        {data.tags.map((tag, index) => (
          <div
            key={index}
            className={`px-2 py-1 rounded-full text-sm`}
            style={{ backgroundColor: tag.color }}
          >
            {tag.name}
          </div>
        ))}
      </div>
      <h1 className="text-base">{data.titre}</h1>
      <p className="text-sm font-light text-gray-500">
        Ecrit par {data.auteur} • {data.dureeLecture} min lecture
      </p>
    </div>
  );
};

export default Card;
