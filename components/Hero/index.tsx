/** @jsxImportSource @emotion/react */

import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import Button from "../Button";
import heroIllustration from "../../public/images/hero.svg";

export default function Hero() {
  return (
    <div css={{ paddingTop: "3rem" }}>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div css={{ maxWidth: "600px" }}>
          <h1
            css={{
              fontWeight: "600",
              fontSize: "3.5rem",
              marginBottom: "2rem",
            }}
          >
            Building Beautiful Web Experiences
          </h1>
          <Button icon={<MdArrowForward size={32} />}>See My Work</Button>
        </div>
        <Image src={heroIllustration} alt="" width={540} />
      </div>
    </div>
  );
}
