/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import ExperienceCard from "./ExperienceCard";

export interface ExperienceItem {
  image: string;
  title: string;
  text: string;
  techStack: React.ReactNode[];
}

interface ExperienceListProps {
  items: ExperienceItem[];
}

export default function ExperienceList({ items }: ExperienceListProps) {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        rowGap: "8rem",
      }}
    >
      {items.map((item, index) => (
        <>
          <ExperienceCard key={index} title={item.title} image={item.image}>
            {item.text}
          </ExperienceCard>
          <div css={{ textAlign: "center" }}>
            <h3 css={{ marginBottom: "1rem" }}>Tech Stack</h3>
            <div
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
                maxWidth: "70%",
                margin: "auto",
              }}
            >
              {item.techStack}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
