import React from "react";
import { CardProps } from "./CardA";

const CardB = ({ img, header, text }: CardProps) => {
  return (
    <div className="w-60 flex flex-col gap-5">
      <img className="rounded-2xl" src={img} alt={header} />
      <div>
        <p className="text-lg">{header}</p>
        <div className="border border-primary1 w-1/4" />
      </div>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};

export default CardB;
