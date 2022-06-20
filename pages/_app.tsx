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
            "--bg-light-color": "#2E3033",
            "--primary-color": "#F45B69",
            "--secondary-color": "#4087E6",
            "--fg-color": "#FFFFFF",
            "--fg-dark-color": "#E1E1E5",
          },
          "html, body, #__next": {
            height: "100%",
          },
          "*": {
            margin: 0,
            padding: 0,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "normal",
            lineHeight: "calc(1em + 0.5rem)",
          },
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
          body: {
            backgroundColor: "var(--bg-color)",
            color: "var(--fg-color)",
            lineHeight: 1.5,
            WebkitFontSmoothing: "antialiased",
          },
          a: {
            color: "inherit",
            textDecoration: "none",
          },
          "ul, ol": {
            listStyle: "none",
          },
          "input, button, textarea, select": {
            font: "inherit",
          },
          "p, h1, h2, h3, h4, h5, h6": {
            overflowWrap: "break-word",
          },
          p: {
            overflowWrap: "break-word",
            hyphens: "auto",
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
