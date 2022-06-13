/** @jsxImportSource @emotion/react */

interface SectionProps {
  children?: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <div css={{ paddingTop: "5rem" }}>{children}</div>;
}
