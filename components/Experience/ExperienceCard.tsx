import { ImageProps } from "next/image";
import React from "react";

interface ExperienceCardProps {
  image: ImageProps;
  title: string;
  children: string;
  listItems: string[];
}

export default function ExperienceCard({
  title,
  children,
}: ExperienceCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
