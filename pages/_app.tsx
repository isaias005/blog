import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Navbar from "../components/Navbar";
import { Container } from "../components/Layout";
import { NavbarItem } from "../components/Navbar/NavbarItems";

const navbarItems: NavbarItem[] = [
  {
    url: "#",
    text: "Experience",
  },
  {
    url: "#",
    text: "Projects",
  },
  {
    url: "#",
    text: "About Me",
  },
  {
    url: "#",
    text: "Contact",
  },
  {
    url: "#",
    text: "Blog",
  },
];

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={{
          ":root": {
            "--bg-color": "#1D1E20",
            "--bg-light-color": "#27282B",
            "--primary-color": "#F45B69",
            "--secondary-color": "#4087E6",
            "--fg-color": "#FFFFFF",
          },
          "*": {
            margin: 0,
            padding: 0,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "normal",
          },
          body: {
            backgroundColor: "var(--bg-color)",
            color: "var(--fg-color)",
          },
          a: {
            color: "inherit",
            textDecoration: "none",
          },
        }}
      />
      <Container>
        <Navbar brandText="Isaias De Leon" items={navbarItems} />
        <Component {...pageProps} />
      </Container>
    </>
  );
}
