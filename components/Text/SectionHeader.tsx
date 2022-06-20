/** @jsxImportSource @emotion/react */

interface SectionHeaderProps {
  children: string;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2
      css={{
        fontWeight: "500",
        fontSize: "2rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "4rem",
        ":after": {
          content: "''",
          top: "25%",
          left: "12%",
          width: "3.75rem",
          height: 0,
          border: "3px solid var(--primary-color)",
          borderRadius: "3px",
        },
      }}
    >
      {children}
    </h2>
  );
}
