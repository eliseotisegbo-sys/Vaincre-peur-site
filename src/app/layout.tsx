import type { Metadata } from "next";
import "./globals.css";
import { product } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://motivasefo.mychariow.shop"),
  title: "Vaincre la peur en un clin d’œil : Agir en 7 jours | MotivaShop",
  description:
    "Découvrez un guide simple pour parler en public, lancer un projet et passer à l’action. 3 000 FCFA au lieu de 8 000 FCFA. Téléchargement immédiat.",
  alternates: { canonical: product.checkoutUrl },
  openGraph: {
    title: "Vaincre la peur en un clin d’œil | MotivaShop",
    description: "Un guide en 7 jours pour agir, sans attendre d’être prêt. 3 000 FCFA.",
    url: product.checkoutUrl,
    siteName: "MotivaShop",
    images: [{ url: product.cover }],
    locale: "fr_FR",
    type: "website",
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
