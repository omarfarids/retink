import React from "react";

export interface CardProps {
  img: string;
  header: string;
  text: string;
}

const CardA = ({ img, header, text }: CardProps) => {
  return (
    <div className="p-8 flex flex-col gap-5 items-center justify-center m-3 md:w-80 shadow-lg rounded-xl h-96">
      <img src={img} alt={header} />
      <p className="font-medium">{header}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default CardA;
