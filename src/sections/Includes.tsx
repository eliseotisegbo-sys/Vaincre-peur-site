import { product } from "@/lib/content";

export function Includes() {
  return (
    <section className="block reveal-on-scroll" id="contenu">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">CONTENU DU PACK</p>
          <h2>Ce que vous recevez dans les 2 minutes.</h2>
          <p className="intro">
            Vous payez, et les fichiers apparaissent directement sur votre écran.
            Un lien part aussi sur votre e-mail. À vous pour toujours, aucune date d'expiration.
          </p>
        </div>

        <div className="files-showcase-grid">
          {product.files.map((file, idx) => (
            <div key={idx} className="file-box hover-lift">
              <div className="file-box-top">
                <span className="file-tag">{file.tag}</span>
                <span className="file-meta">{file.meta}</span>
              </div>
              <h3 className="file-title">{file.title}</h3>
              <p className="file-desc">{file.description}</p>
              <div className="file-features">
                <span className="feat-check">• Format PDF compatible smartphone, tablette et ordinateur</span>
                <span className="feat-check">• Fichiers conservés sans limite de durée</span>
              </div>
            </div>
          ))}
        </div>

        <div className="delivery-bar">
          <div className="delivery-item">
            <span className="delivery-dot">•</span>
            <div>
              <strong>Téléchargement direct</strong>
              <small>Accès immédiat dès le paiement confirmé</small>
            </div>
          </div>
          <div className="delivery-item">
            <span className="delivery-dot">•</span>
            <div>
              <strong>Paiement sécurisé</strong>
              <small>{product.paymentsText}</small>
            </div>
          </div>
          <div className="delivery-item">
            <span className="delivery-dot">•</span>
            <div>
              <strong>Garanti 7 jours</strong>
              <small>Un message WhatsApp suffit pour être remboursé</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
