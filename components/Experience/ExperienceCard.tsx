/** @jsxImportSource @emotion/react */
import Image from "next/image";

interface ExperienceCardProps {
  image: string;
  title: string;
  secondaryTitle: string;
  children: string;
}

export default function ExperienceCard({
  image,
  title,
  secondaryTitle,
  children,
}: ExperienceCardProps) {
  return (
    <div
      css={{
        marginTop: "2rem",
        padding: "2rem",
        display: "flex",
        borderRadius: "5px",
        gap: "2rem",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        backgroundColor: "var(--bg-light-color)",
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
          gap: "2rem",
          flexBasis: "40%",
        }}
      >
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          flexBasis: "20%",
          textAlign: "right",
          marginLeft: "auto",
        }}
      >
        <h3>{secondaryTitle}</h3>
        <ul>
          <li>React</li>
          <li>NestJS</li>
          <li>SQLServer</li>
          <li>NextJS</li>
        </ul>
      </div>
    </div>
  );
}
