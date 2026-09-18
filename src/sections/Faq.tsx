"use client";

import { useState } from "react";
import { product } from "@/lib/content";

const faqItems = [
  {
    q: "Est-ce que la peur disparaît totalement après la lecture ?",
    a: "Non. La peur est une réaction biologique normale qui signale une situation inhabituelle. Le but du guide n'est pas de la faire disparaître, mais d'apprendre à calmer les tensions physiques pour agir malgré l'appréhension.",
  },
  {
    q: "Cette méthode convient-elle aux personnes très réservées ?",
    a: "Oui. Les exercices reposent sur une progression graduée. Vous commencez par des étapes simples adaptées à votre rythme, sans jamais vous forcer à adopter un comportement artificiel.",
  },
  {
    q: "Pourquoi le tarif est-il fixé à 3 000 FCFA au lieu de 8 000 FCFA ?",
    a: "Ce tarif correspond à une promotion temporaire de 24 heures visant à rendre ces outils d'action accessibles au plus grand nombre.",
  },
  {
    q: "Comment s'effectuent le paiement et l'accès aux fichiers ?",
    a: "Le règlement s'effectue en toute sécurité par Wave, MTN Mobile Money, Moov Money ou carte bancaire. Les fichiers PDF sont téléchargeables immédiatement après la validation de la commande et un lien vous est également transmis par e-mail.",
  },
  {
    q: "Que faire en cas de difficulté technique lors de la réception ?",
    a: "Notre service d'assistance est joignable directement sur WhatsApp au +229 01 46 34 79 88 pour vous accompagner et vous renvoyer vos documents sans délai.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section className="block fog reveal-on-scroll" id="faq">
      <div className="wrap faq-container">
        <div className="section-head text-center">
          <p className="kicker">QUESTIONS FRÉQUENTES</p>
          <h2>Réponses à vos interrogations.</h2>
          <p className="intro centered">
            Voici les informations essentielles sur le contenu du guide et les modalités de commande.
          </p>
        </div>

        <div className="faq-accordion">
          {faqItems.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className={`faq-row ${isOpen ? "is-active" : ""}`}>
                <button
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="faq-answer-panel"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-footer-note">
          <p>
            Une question particulière ?{" "}
            <a href={product.whatsapp} target="_blank" rel="noopener noreferrer">
              Écrivez-nous directement sur WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
