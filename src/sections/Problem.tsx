import { scienceFacts } from "@/lib/content";

export function Problem() {
  return (
    <section className="block fog reveal-on-scroll" id="probleme">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">LE PROBLÈME</p>
          <h2>À vous aussi, cela vous arrive d'hésiter ?</h2>
          <p className="intro">
            Ce n'est pas vous, c'est votre corps. Cette boule au ventre n'est pas un manque
            de volonté. C'est une alarme biologique qui se déclenche sans vous demander votre
            avis — et qui peut s'apprendre à calmer.
          </p>
        </div>

        <div className="cards">
          <article className="card interactive-card">
            <span className="card-pill-category">Prise de parole</span>
            <h3>Parler en public ou en réunion</h3>
            <p>
              Vous souhaitez exprimer votre avis. Votre gorge se serre et votre rythme
              cardiaque s'accélère. Vous hésitez quelques secondes et une autre personne
              prend la parole à votre place.
            </p>
            <span className="card-foot-tag">Appréhension du jugement</span>
          </article>

          <article className="card interactive-card">
            <span className="card-pill-category">Entrepreneuriat</span>
            <h3>Lancer votre propre projet</h3>
            <p>
              Votre idée est prête depuis plusieurs mois. Vous continuez à peaufiner des
              détails secondaires sans jamais présenter votre travail au public.
            </p>
            <span className="card-foot-tag">Recherche du moment parfait</span>
          </article>

          <article className="card interactive-card">
            <span className="card-pill-category">Habitudes</span>
            <h3>Passer à l'action au quotidien</h3>
            <p>
              Vous savez précisément quelle décision prendre pour avancer. Vous vous
              tournez pourtant vers des activités faciles pour repousser l'échéance.
              La procrastination traduit souvent une simple appréhension.
            </p>
            <span className="card-foot-tag">Hésitation prolongée</span>
          </article>
        </div>

        <div className="science-banner hover-lift">
          <div className="science-grid">
            {scienceFacts.map((fact, idx) => (
              <div key={idx} className="science-stat-col">
                <span className="stat-number">{fact.metric}</span>
                <strong className="stat-title">{fact.title}</strong>
                <p className="stat-desc">{fact.desc}</p>
              </div>
            ))}
          </div>
          <div className="science-callout">
            La réaction de stress n'est pas un manque de volonté. Le système nerveux envoie
            un signal d'alerte instinctif. Ce guide vous apprend à comprendre ce signal pour{" "}
            <strong>agir avec lucidité sans vous laisser paralyser</strong>.
          </div>
        </div>
      </div>
    </section>
  );
}
