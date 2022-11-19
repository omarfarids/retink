import React from "react";

interface TextSectionProps {
  header: string;
  text: string;
}

const TextSection = ({ header, text }: TextSectionProps) => {
  return (
    <div className="text-center px-5 py-10 md:w-1/2 mx-auto">
      <p className="font-medium text-lg text-primary1 py-3">{header}</p>
      <p>{text}</p>
    </div>
  );
};

export default TextSection;
