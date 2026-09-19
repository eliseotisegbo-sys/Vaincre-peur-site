"use client";

import { useState } from "react";
import { product } from "@/lib/content";

type ModalId = "mentions" | "cgv" | "remboursement" | "confidentialite" | null;

export function LegalModals() {
  const [open, setOpen] = useState<ModalId>(null);
  const close = () => setOpen(null);

  return (
    <>
      <div className="legal-links-row">
        <button className="legal-link-btn" onClick={() => setOpen("mentions")}>Mentions légales</button>
        <span aria-hidden="true">·</span>
        <button className="legal-link-btn" onClick={() => setOpen("cgv")}>Conditions générales de vente</button>
        <span aria-hidden="true">·</span>
        <button className="legal-link-btn" onClick={() => setOpen("remboursement")}>Politique de remboursement</button>
        <span aria-hidden="true">·</span>
        <button className="legal-link-btn" onClick={() => setOpen("confidentialite")}>Confidentialité</button>
      </div>

      {open && (
        <div
          className="legal-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Information légale"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div className="legal-modal-panel">
            <button className="legal-modal-close" onClick={close} aria-label="Fermer">✕</button>

            {open === "mentions" && (
              <>
                <h2>Mentions légales</h2>
                <p>
                  Le site <strong>vaincre-la-peur.vercel.app</strong> est édité par MotivaShop,
                  opéré par Sefo, vendeur indépendant basé à Cotonou, Bénin.
                  Contact : via WhatsApp au +229 46 34 79 88.
                </p>
                <p>
                  Hébergement : Vercel Inc., San Francisco, États-Unis.
                  Distribution des fichiers numériques : Chariow (motivasefo.mychariow.shop).
                </p>
              </>
            )}

            {open === "cgv" && (
              <>
                <h2>Conditions générales de vente</h2>
                <p>
                  <strong>Produit vendu :</strong> Guide numérique « Vaincre la Peur en un clin d'œil » (3 fichiers PDF).
                  Prix : 3 000 FCFA (tarif promotionnel). Prix hors promotion : 8 000 FCFA.
                </p>
                <p>
                  <strong>Livraison :</strong> Accès immédiat après validation du paiement.
                  Les fichiers s'affichent sur la page de confirmation et un lien est envoyé par e-mail.
                </p>
                <p>
                  <strong>Paiement accepté :</strong> Wave, MTN MoMo, Moov Money, Visa, Mastercard,
                  via la plateforme sécurisée Chariow.
                </p>
                <p>
                  <strong>Droit de rétractation :</strong> Conformément à la politique de remboursement ci-dessous,
                  vous disposez de 7 jours pour demander un remboursement intégral.
                </p>
              </>
            )}

            {open === "remboursement" && (
              <>
                <h2>Politique de remboursement — Garantie 7 jours</h2>
                <p>
                  Si, après avoir lu le guide et réalisé les exercices proposés pendant 7 jours,
                  vous estimez que ce contenu ne vous a pas été utile, vous pouvez demander
                  un remboursement complet sans justification à fournir.
                </p>
                <p>
                  Un simple message sur WhatsApp au{" "}
                  <a href={product.whatsappRefundUrl} target="_blank" rel="noopener noreferrer">
                    +229 46 34 79 88
                  </a>{" "}
                  suffit. Le remboursement est effectué dans les 48 heures.
                  Vous conservez les fichiers téléchargés.
                </p>
                <p>
                  Cette garantie est valable à compter de la date d'achat. Elle s'applique
                  à toute commande passée sur motivasefo.mychariow.shop.
                </p>
              </>
            )}

            {open === "confidentialite" && (
              <>
                <h2>Politique de confidentialité</h2>
                <p>
                  Ce site ne collecte aucune donnée personnelle directement. Les données saisies
                  lors du paiement (nom, e-mail, numéro de téléphone) sont traitées exclusivement
                  par Chariow pour finaliser la commande.
                </p>
                <p>
                  Ces données ne sont pas revendues à des tiers. Elles sont conservées le temps
                  nécessaire au traitement de votre commande et de l'éventuel remboursement.
                </p>
                <p>
                  Pour toute demande relative à vos données, contactez{" "}
                  <a href={product.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp +229 46 34 79 88
                  </a>.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
