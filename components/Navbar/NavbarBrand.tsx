/** @jsxImportSource @emotion/react */

import Link from "next/link";

interface NavbarBrandProps {
  children: string;
}

export default function NavbarBrand({ children }: NavbarBrandProps) {
  return (
    <Link href="/">
      <a>
        <span css={{ fontSize: "1.8rem" }}>{children}</span>
      </a>
    </Link>
  );
}
