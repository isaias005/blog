/** @jsxImportSource @emotion/react */
import { MdMenu } from "react-icons/md";
import Link from "next/link";

export interface NavbarItem {
  url: string;
  text: string;
}

interface NavbarItemsProps {
  items: NavbarItem[];
}

export default function NavbarItems({ items }: NavbarItemsProps) {
  return (
    <>
      <div
        css={{
          display: "none",
          gap: "3rem",
          alignItems: "center",
          "@media only screen and (min-width: 768px)": {
            display: "flex",
          },
        }}
      >
        {items.map((item) => (
          <Link href={item.url} key={item.text}>
            <a
              css={{
                fontSize: "1.1rem",
                ":hover": {
                  color: "var(--primary-color)",
                  cursor: "pointer",
                },
              }}
              aria-label={item.text}
            >
              {item.text}
            </a>
          </Link>
        ))}
      </div>
      <MdMenu
        size={24}
        css={{
          display: "block",
          "@media only screen and (min-width: 768px)": {
            display: "none",
          },
        }}
      />
    </>
  );
}
