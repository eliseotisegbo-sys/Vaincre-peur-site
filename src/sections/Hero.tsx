import { AnimatedBook } from "@/components/AnimatedBook";
import { cta, paymentLogos, product } from "@/lib/content";
import Image from "next/image";

export function Hero() {
  return (
    <section className="hero reveal-on-scroll" id="top">
      <div className="wrap hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="rating-pill">
              {product.ratings.label}
            </span>
          </div>

          <p className="hero-surtitre">SEFO · VAINCRE LA PEUR EN UN CLIN D'ŒIL</p>

          <h1>
            Osez parler, décider et lancer vos projets en{" "}
            <span className="word-tag">7 jours</span>{" "}
            — même si la peur ne disparaît jamais.
          </h1>

          <p className="lede">
            Un guide pratique pour comprendre les signaux physiques de l'appréhension,
            les calmer en quelques minutes et avancer — sans attendre d'être prêt.
          </p>

          <div className="hero-pricing">
            <div className="price-tag">
              <span className="current-price">{product.price}</span>
              <span className="compare-price">{product.compareAt}</span>
              <span className="discount-badge">{product.discountPercent}</span>
            </div>
          </div>

          <div className="actions">
            <a className="btn btn-ember btn-hero-cta" href={product.checkoutUrl}>
              {cta.heroPrimary}
            </a>
          </div>

          <p className="hero-trust-line">
            🔒 {cta.heroTrust}
          </p>

          <div className="hero-trust-row">
            <div className="trust-item">
              <span className="bullet-dot" aria-hidden="true">•</span>
              <span>Guide complet de 35 pages et bonus pratique de 13 pages inclus.</span>
            </div>
            <div className="trust-item">
              <span className="bullet-dot" aria-hidden="true">•</span>
              <span>Paiement Wave, MTN MoMo, Moov Money ou carte bancaire.</span>
            </div>
            <div className="trust-item">
              <span className="bullet-dot" aria-hidden="true">•</span>
              <span>Des étapes concrètes applicables dès aujourd'hui.</span>
            </div>
            <div className="trust-item">
              <span className="bullet-dot" aria-hidden="true">•</span>
              <span>Garanti 7 jours : remboursé sur simple message WhatsApp, sans justification.</span>
            </div>
          </div>

          <div className="hero-payment-logos" aria-label="Moyens de paiement acceptés">
            {paymentLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={40}
                height={24}
                className="payment-logo-sm"
              />
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <AnimatedBook />
        </div>
      </div>
    </section>
  );
}
