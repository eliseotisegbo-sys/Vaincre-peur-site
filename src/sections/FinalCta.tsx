import { CountdownTimer } from "@/components/CountdownTimer";
import { cta, paymentLogos, product } from "@/lib/content";
import Image from "next/image";

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
                Reporter vos initiatives entretient les doutes. En vous appuyant sur des
                démarches claires et progressives, vous commencez à avancer dès ce soir
                avec des repères solides.
              </p>

              <div className="offer-timer-container">
                <CountdownTimer />
              </div>

              <div className="offer-checklist">
                <div className="check-line">
                  <span><strong>Livre complet :</strong> Vaincre la Peur en un clin d'œil (35 pages).</span>
                </div>
                <div className="check-line">
                  <span><strong>Cahier pratique :</strong> 12 défis réels à relever (13 pages).</span>
                </div>
                <div className="check-line">
                  <span><strong>Fiche rituel :</strong> Les 12 mantras du courage au quotidien.</span>
                </div>
                <div className="check-line">
                  <span><strong>Accès immédiat :</strong> Téléchargement direct sur votre appareil.</span>
                </div>
              </div>
            </div>

            <div className="offer-right">
              {/* Encadré Garantie */}
              <div className="guarantee-box">
                <p className="guarantee-title">Votre satisfaction ou votre argent rendu</p>
                <p className="guarantee-text">
                  Lisez le guide. Faites les 7 jours. Relevez les premiers défis.
                  Si vous estimez que ça ne vous a rien apporté, un message sur WhatsApp
                  suffit et je vous renvoie vos 3 000 FCFA.
                  Je ne vous demanderai pas pourquoi. Et vous gardez les fichiers.
                </p>
                <p className="guarantee-sig">Sefo</p>
                <a
                  className="btn btn-whatsapp btn-sm"
                  href={product.whatsappRefundUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demander le remboursement sur WhatsApp
                </a>
              </div>

              <div className="pricing-box">
                <span className="pricing-headline">Tarif promotionnel</span>
                <div className="big-price-tag">
                  <span className="price-val">{product.price}</span>
                  <span className="old-val">{product.compareAt}</span>
                </div>
                <span className="discount-tag">Réduction immédiate de 5 000 FCFA ({product.discountPercent})</span>

                <a className="btn btn-ember btn-large-cta" href={product.checkoutUrl}>
                  {cta.finalPrimary}
                </a>

                <p className="instant-notice">
                  {cta.finalTrust}
                </p>

                <div className="final-payment-logos" aria-label="Moyens de paiement acceptés">
                  {paymentLogos.map((logo) => (
                    <Image
                      key={logo.name}
                      src={logo.src}
                      alt={logo.name}
                      width={48}
                      height={28}
                      className="payment-logo-md"
                    />
                  ))}
                </div>

                <div className="security-badges">
                  <span>Accès direct</span>
                  <span>Format PDF</span>
                  <span>Tout appareil</span>
                </div>

                <p className="chariow-note">Distribution assurée par Chariow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
