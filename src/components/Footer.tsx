import { product } from "@/lib/content";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-row">
          <div className="foot-brand">
            <strong>{product.brand}</strong>
            <p>Édition pratique pour l'action et le développement personnel.</p>
          </div>
          <div className="foot-links">
            <a href={product.storeUrl} target="_blank" rel="noopener noreferrer">Boutique</a>
            <a href={product.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={product.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
        <p className="note">
          {product.name} est un guide d'accompagnement personnel et méthodologique. Il ne constitue pas un avis
          médical ou psychologique. Les résultats dépendent de l'implication de chaque lecteur. Paiement sécurisé
          et distribution des fichiers numériques assurés par MotivaShop.
        </p>
      </div>
    </footer>
  );
}
