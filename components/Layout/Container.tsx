/** @jsxImportSource @emotion/react */

interface ContainerProps {
  children?: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div css={{ maxWidth: "1140px", margin: "auto" }}>{children}</div>;
}
