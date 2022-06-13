/** @jsxImportSource @emotion/react */

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  icon: React.ReactNode;
}

export default function Button({ children, icon, ...props }: ButtonProps) {
  return (
    <button
      css={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "0.75rem 1.5rem",
        background: "var(--primary-color)",
        color: "var(--fg-color)",
        border: "none",
        borderRadius: "5px",
        fontWeight: "500",
        fontSize: "1.5rem",
        ":hover": {
          cursor: "pointer",
        },
      }}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}
