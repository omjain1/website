import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    // <div className="grid-container">
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-33">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover object-center"
      />

      <div className="p-3">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 overflow-hidden">{description}</p>

      </div>
    </div>
  );
};

export default ProjectCard;
