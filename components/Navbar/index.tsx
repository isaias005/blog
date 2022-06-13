/** @jsxImportSource @emotion/react */

import NavbarBrand from "./NavbarBrand";
import NavbarItems, { NavbarItem } from "./NavbarItems";

interface NavbarProps {
  brandText: string;
  items: NavbarItem[];
}

export default function Navbar({ brandText, items }: NavbarProps) {
  return (
    <div
      css={{
        display: "flex",
        padding: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <NavbarBrand>{brandText}</NavbarBrand>
      <NavbarItems items={items} />
    </div>
  );
}
