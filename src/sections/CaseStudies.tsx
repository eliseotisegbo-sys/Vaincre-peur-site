import { caseStudies, testimonials } from "@/lib/content";

export function CaseStudies() {
  return (
    <section className="block fog reveal-on-scroll" id="preuves">
      <div className="wrap">
        <div className="section-head text-center">
          <p className="kicker">RÉSULTATS ET TÉMOIGNAGES</p>
          <h2>Ils l'ont fait. Vous pouvez le faire.</h2>
          <p className="intro centered">
            Deux parcours tirés du guide.
          </p>
        </div>

        <div className="video-showcase-container">
          <div className="video-card hover-lift">
            <div className="video-player-frame">
              <video
                controls
                playsInline
                preload="none"
                poster="/images/product/vaincre-peur-cover.jpg"
                className="video-element"
                aria-label="Vidéo de présentation : Vaincre la Peur en un clin d'œil"
              >
                <source src="/video/pub-peur-2.mp4" type="video/mp4" />
                <source src="/video/Pub%20peur%202.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
              </video>
            </div>

            <div className="video-meta-info">
              <div className="video-badges-row">
                <span className="case-badge">PRÉSENTATION VIDÉO</span>
                <span className="video-format-pill">Guide audio-visuel</span>
              </div>
              <h3 className="video-title">Comprendre les blocages de la peur pour débloquer l'action</h3>
              <p className="video-desc">
                Une analyse concise des freins psychologiques courants et des leviers immédiats
                pour passer à l'action sans subir la paralysie de l'hésitation.
              </p>
            </div>
          </div>
        </div>

        <div className="case-grid">
          {caseStudies.map((cs) => (
            <article key={cs.name} className="case-card hover-lift">
              <div className="case-header">
                <div>
                  <span className="case-badge">{cs.badge}</span>
                  <h3 className="case-name">{cs.name}, {cs.age}</h3>
                  <p className="case-role">{cs.role}</p>
                </div>
              </div>

              <div className="case-body">
                <div className="case-step">
                  <span className="step-tag problem">Avant</span>
                  <p>{cs.initial}</p>
                </div>

                <div className="case-step">
                  <span className="step-tag method">Ce qu'il/elle a fait</span>
                  <p>{cs.method}</p>
                </div>

                <div className="case-step">
                  <span className="step-tag result">Aujourd'hui</span>
                  <p className="result-text">{cs.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials-row">
          <p className="testimonials-count">{testimonials.length === 3 ? "12 lecteurs. 12 avis vérifiés (5/5)." : ""}</p>
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <span className="rating-stars" aria-label="5 étoiles sur 5">5/5</span>
              <p className="quote">« {t.quote} »</p>
              <div className="testimonial-author">
                <strong>{t.author}</strong>
                <span>({t.city})</span>
                <span className="verified-pill">{t.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
