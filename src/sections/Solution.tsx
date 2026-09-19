"use client";

import { useState } from "react";
import { cta, liesOfFear, product, sevenDaysPlan, techniques } from "@/lib/content";

export function Solution() {
  const [activeTab, setActiveTab] = useState<"techniques" | "plan" | "mensonges">("techniques");
  const [selectedTech, setSelectedTech] = useState(0);

  return (
    <section className="block reveal-on-scroll" id="methode">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">LA MÉTHODE</p>
          <h2>Apprendre à agir avec la peur, pas contre elle.</h2>
          <p className="intro">
            La peur ne disparaît jamais totalement et ce n'est pas l'objectif. Le courage
            consiste à décider qu'un projet ou une opportunité compte davantage que
            l'appréhension du moment.
          </p>
        </div>

        <div className="turning-point-card hover-lift">
          <div className="turning-point-inner">
            <span className="turning-quote-mark">"</span>
            <p>
              Attendre d'avoir pleinement confiance pour se lancer est un piège classique.
              La confiance en soi ne précède pas l'action. Elle en découle naturellement
              au fil des étapes franchies.
            </p>
            <span className="turning-author">Extrait du chapitre 2 du guide Vaincre la Peur en un clin d'œil.</span>
          </div>
        </div>

        <div className="method-tabs-nav">
          <button
            className={`tab-btn ${activeTab === "techniques" ? "active" : ""}`}
            onClick={() => setActiveTab("techniques")}
          >
            4 techniques pratiques
          </button>
          <button
            className={`tab-btn ${activeTab === "plan" ? "active" : ""}`}
            onClick={() => setActiveTab("plan")}
          >
            Plan d'action en 7 jours
          </button>
          <button
            className={`tab-btn ${activeTab === "mensonges" ? "active" : ""}`}
            onClick={() => setActiveTab("mensonges")}
          >
            4 vérités à retenir
          </button>
        </div>

        {activeTab === "techniques" && (
          <div className="tab-pane animate-fade-in">
            <div className="techniques-grid">
              {techniques.map((tech, idx) => (
                <div
                  key={tech.num}
                  className={`tech-card ${selectedTech === idx ? "selected" : ""}`}
                  onClick={() => setSelectedTech(idx)}
                >
                  <div className="tech-card-head">
                    <span className="tech-num">{tech.num}</span>
                    <span className="tech-category">{tech.category}</span>
                  </div>
                  <h4 className="tech-title">{tech.name}</h4>
                  <p className="tech-summary">{tech.summary}</p>
                  <div className="tech-highlight">
                    <span className="highlight-tag">Bénéfice :</span> {tech.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "plan" && (
          <div className="tab-pane animate-fade-in">
            <div className="plan-timeline">
              {sevenDaysPlan.map((step) => (
                <div key={step.day} className="timeline-item hover-lift">
                  <div className="timeline-marker">
                    <span className="timeline-day">{step.day}</span>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{step.theme}</h4>
                      <span className="tool-pill">{step.tool}</span>
                    </div>
                    <p>{step.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "mensonges" && (
          <div className="tab-pane animate-fade-in">
            <div className="lies-grid">
              {liesOfFear.map((item, idx) => (
                <div key={idx} className="lie-card hover-lift">
                  <div className="lie-header">
                    <span className="lie-cross">Idée reçue :</span>
                    <strong className="lie-text">{item.lie}</strong>
                  </div>
                  <div className="truth-body">
                    <span className="truth-check">Réalité observée :</span>
                    <p className="truth-text">{item.truth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="method-cta-row">
          <div>
            <h3>Envie de mettre en pratique ces démarches ?</h3>
            <p>Le guide détaille chaque protocole avec des exercices clairs et des fiches d'action.</p>
          </div>
          <div className="method-cta-buttons">
            <a className="btn btn-ember" href={product.checkoutUrl}>
              {cta.methodEnd}
            </a>
            <a
              className="btn btn-whatsapp"
              href={product.whatsappInfoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Poser une question sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
