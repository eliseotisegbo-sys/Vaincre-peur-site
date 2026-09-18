import { AnimatedBook } from "@/components/AnimatedBook";
import { CountdownTimer } from "@/components/CountdownTimer";
import { cta, product } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero reveal-on-scroll" id="top">
      <div className="wrap hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="live-pill">
              <span className="pulse-dot" aria-hidden="true"></span>
              Guide pratique d'action
            </span>
            <span className="rating-pill">
              100% d’avis positifs · Lecteurs vérifiés
            </span>
          </div>

          <h1>
            Vaincre la <span className="word-glow">peur</span>{" "}
            <span className="word-underline">en un clin d’œil</span> et passer à l’action en{" "}
            <span className="word-tag">7 jours</span>
          </h1>

          <p className="lede">
            <strong>Vous hésitez souvent avant d’agir ?</strong> Découvrez une démarche claire pour
            apaiser vos tensions physiques, prendre la parole sans trembler et lancer vos projets
            sans attendre d'être parfait.
          </p>

          <div className="hero-timer-wrap">
            <CountdownTimer compact />
          </div>

          <div className="hero-pricing">
            <div className="price-tag">
              <span className="current-price">{product.price}</span>
              <span className="compare-price">{product.compareAt}</span>
              <span className="discount-badge">{product.discountPercent}</span>
            </div>
            <span className="price-note">Téléchargement immédiat après validation. Offre promotionnelle 24h.</span>
          </div>

          <div className="actions">
            <a className="btn btn-ember btn-hero-cta" href={product.checkoutUrl}>
              {cta.primary}
            </a>
            <a className="btn btn-ghost" href="#methode">
              {cta.secondary}
            </a>
          </div>

          <div className="hero-trust-row">
            <div className="trust-item">
              <span className="bullet-dot" aria-hidden="true">•</span>
              <span>Guide complet de 35 pages et bonus pratique de 13 pages inclus.</span>
            </div>
            <div className="trust-item">
              <span className="bullet-dot" aria-hidden="true">•</span>
              <span>Paiement sécurisé par Wave, Mobile Money ou carte bancaire.</span>
            </div>
            <div className="trust-item">
              <span className="bullet-dot" aria-hidden="true">•</span>
              <span>Des étapes concrètes applicables dès aujourd’hui.</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <AnimatedBook />
        </div>
      </div>
    </section>
  );
}
