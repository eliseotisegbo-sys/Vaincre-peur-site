import { CountdownTimer } from "@/components/CountdownTimer";
import { cta, product } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="block reveal-on-scroll" id="offre">
      <div className="wrap">
        <div className="final-offer-card hover-lift">
          <div className="offer-badge-ribbon">
            <span>OFFRE PROMOTIONNELLE 24 HEURES</span>
          </div>

          <div className="offer-inner-grid">
            <div className="offer-left">
              <p className="kicker">PASSER À L'ACTION</p>
              <h2>Prenez la décision d'agir dès aujourd'hui.</h2>
              <p className="offer-desc">
                Reporter vos initiatives entretient les doutes. En vous appuyant sur des démarches
                claires et progressives, vous commencez à avancer dès ce soir avec des repères solides.
              </p>

              <div className="offer-timer-container">
                <CountdownTimer />
              </div>

              <div className="offer-checklist">
                <div className="check-line">
                  <span className="chk">•</span>
                  <span><strong>Livre complet :</strong> Vaincre la Peur en un clin d’œil (35 pages).</span>
                </div>
                <div className="check-line">
                  <span className="chk">•</span>
                  <span><strong>Cahier pratique :</strong> 12 défis réels à relever (13 pages).</span>
                </div>
                <div className="check-line">
                  <span className="chk">•</span>
                  <span><strong>Fiche rituel :</strong> Les 12 mantras du courage au quotidien.</span>
                </div>
                <div className="check-line">
                  <span className="chk">•</span>
                  <span><strong>Accès immédiat :</strong> Téléchargement direct et assistance WhatsApp.</span>
                </div>
              </div>
            </div>

            <div className="offer-right">
              <div className="pricing-box">
                <span className="pricing-headline">Tarif promotionnel</span>
                <div className="big-price-tag">
                  <span className="price-val">{product.price}</span>
                  <span className="old-val">{product.compareAt}</span>
                </div>
                <span className="discount-tag">Réduction immédiate de 5 000 FCFA ({product.discountPercent})</span>

                <a className="btn btn-ember btn-large-cta" href={product.checkoutUrl}>
                  {cta.primary}
                </a>

                <p className="instant-notice">
                  Paiement sécurisé par {product.payments}.
                </p>

                <div className="security-badges">
                  <span>Accès direct</span>
                  <span>•</span>
                  <span>Format PDF</span>
                  <span>•</span>
                  <span>Tout appareil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
