"use client";

import { useState } from "react";
import { faqItems, product } from "@/lib/content";

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
          <h2>Vos questions avant d'acheter.</h2>
          <p className="intro centered">
            Les questions qu'on me pose le plus souvent sur WhatsApp. Si la vôtre n'y est pas, écrivez-moi.
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
                  <span
                    className="faq-toggle-icon"
                    aria-hidden="true"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 250ms ease" }}
                  >
                    ▾
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
            <a href={product.whatsappInfoUrl} target="_blank" rel="noopener noreferrer">
              Écrivez-moi directement sur WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
