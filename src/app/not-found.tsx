import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="fr">
      <body
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          background: "#ffffff",
          color: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          margin: 0,
          gap: "24px",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: 800, letterSpacing: "-0.04em", margin: 0 }}>
          Page introuvable
        </h1>
        <p style={{ color: "#6f737b", fontSize: "18px", margin: 0 }}>
          Cette adresse n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            background: "#e65100",
            color: "#ffffff",
            padding: "12px 28px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "15px",
          }}
        >
          Retour à l'accueil
        </Link>
      </body>
    </html>
  );
}
