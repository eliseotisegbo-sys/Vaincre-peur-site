export function Imagine() {
  return (
    <section className="block fog reveal-on-scroll" id="projection">
      <div className="wrap">
        <div className="section-head text-center">
          <p className="kicker">PROJECTION</p>
          <h2>Imaginez votre quotidien dans 7 jours.</h2>
          <p className="intro centered">
            Prenez quelques secondes pour mesurer la différence lorsque l'appréhension
            ne dicte plus vos décisions professionnelles et personnelles.
          </p>
        </div>

        <div className="contrast-grid">
          <div className="contrast-card before-card hover-lift">
            <div className="contrast-tag before-tag">Avant</div>
            <ul className="contrast-list">
              <li>Vous passez beaucoup de temps à peser les risques avant d'envoyer un message important.</li>
              <li>Vous gardez vos réflexions pour vous en réunion par crainte d'être mal compris.</li>
              <li>Vous repoussez le démarrage de vos projets en espérant des conditions idéales.</li>
              <li>Vous ressentez en fin de journée la frustration liée aux décisions remises à plus tard.</li>
            </ul>
          </div>

          <div className="contrast-card after-card hover-lift">
            <div className="contrast-tag after-tag">Dans 7 jours</div>
            <ul className="contrast-list">
              <li>Vous utilisez la règle des 5 secondes pour amorcer vos démarches sans tarder.</li>
              <li>Vous réglez votre respiration et votre rythme cardiaque en moins de 2 minutes.</li>
              <li>Vous vous exprimez avec clarté lors de vos échanges importants.</li>
              <li>Vous avancez chaque jour avec des objectifs simples et mesurables.</li>
            </ul>
          </div>
        </div>

        <div className="imagine-quote-box">
          <p>
            « Dans un an, vous souhaiterez avoir commencé aujourd'hui. Votre liberté
            d'action commence là où s'arrêtent vos hésitations. »
          </p>
          <span>Sefo, auteur de l'ouvrage.</span>
        </div>

        <div className="imagine-cta-row">
          <a
            className="btn btn-ember"
            href="https://motivasefo.mychariow.shop/vaincre-la-peur/checkout"
          >
            Je commence mes 7 jours maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
