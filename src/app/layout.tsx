import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vaincre-la-peur.vercel.app"),
  title: "Vaincre la Peur en un clin d'œil | MotivaShop",
  description:
    "Un guide en 7 jours pour agir, sans attendre d'être prêt. 3 000 FCFA au lieu de 8 000 FCFA. Téléchargement immédiat.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vaincre la Peur en un clin d'œil | MotivaShop",
    description: "Un guide en 7 jours pour agir, sans attendre d'être prêt. 3 000 FCFA au lieu de 8 000 FCFA.",
    url: "https://vaincre-la-peur.vercel.app/",
    siteName: "MotivaShop",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://vaincre-la-peur.vercel.app/images/og/vaincre-peur-og.jpg",
        width: 1200,
        height: 630,
        alt: "Vaincre la Peur en un clin d'œil. Guide pratique en 7 jours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaincre la Peur en un clin d'œil | MotivaShop",
    description: "Un guide en 7 jours pour agir, sans attendre d'être prêt. 3 000 FCFA au lieu de 8 000 FCFA.",
    images: ["https://vaincre-la-peur.vercel.app/images/og/vaincre-peur-og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
