/** @jsxImportSource @emotion/react */
import Image from "next/image";

interface ExperienceCardProps {
  image: string;
  title: string;
  children: string;
}

export default function ExperienceCard({
  image,
  title,
  children,
}: ExperienceCardProps) {
  return (
    <div
      css={{
        padding: "2rem",
        display: "flex",
        borderRadius: "5px",
        gap: "2rem",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        background:
          "linear-gradient(130deg, rgba(244,91,105,0.30) 0%, rgba(244,91,105,0.35) 35%, rgba(244,91,105,0.40) 100%)",
      }}
    >
      <Image
        css={{ borderRadius: "50%" }}
        src={image}
        alt={title}
        width={200}
        height={200}
      />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flexBasis: "80%",
        }}
      >
        <h3>{title}</h3>
        <p css={{ color: "var(--fg-dark-color)" }}>{children}</p>
      </div>
    </div>
  );
}
