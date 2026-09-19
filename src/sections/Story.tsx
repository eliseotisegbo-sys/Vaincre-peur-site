import Image from "next/image";

export function Story() {
  return (
    <section className="block fog reveal-on-scroll" id="histoire">
      <div className="wrap story-wrap">
        <div className="section-head">
          <p className="kicker">MON HISTOIRE</p>
          <h2>Ce guide est né d'une phrase que je n'ai pas osé dire.</h2>
        </div>

        <div className="story-author-intro">
          <div className="story-author-photo">
            <Image
              src="/images/WhatsApp Image 2026-07-21 at 10.58.11.jpeg"
              alt="Sefo, auteur du guide Vaincre la Peur"
              width={200}
              height={200}
              className="author-img"
              priority
            />
          </div>
          <div className="story-author-meta">
            <h3 className="author-name">Sefo</h3>
            <p className="author-bio">Auteur et formateur en développement personnel</p>
          </div>
        </div>

        <div className="story-body">
          <p>
            Cotonou, mars 2023. Je suis en réunion dans un cabinet de conseil.
            Le directeur présente un projet. Il demande des retours. J'ai une objection
            précise, documentée. J'ouvre la bouche. Rien ne sort. Ma gorge se serre.
            Mon cœur accélère. Je baisse les yeux. La réunion continue sans moi.
          </p>

          <blockquote className="story-quote">
            « Ce n'est pas que je n'ai pas le courage. C'est que mon corps décide avant moi. »
          </blockquote>

          <p>
            Six mois plus tard, j'apprends que je n'ai pas obtenu le poste pour lequel
            je candidatais. La raison notée dans l'évaluation : « manque d'affirmation
            dans les échanges collectifs ».
          </p>

          <p className="story-turning">
            Jusqu'au jour où j'ai arrêté d'attendre d'être prêt.
          </p>

          <p>
            C'est à partir de ce parcours que j'ai conçu ce guide. Pas une théorie,
            pas un séminaire de motivation, mais un protocole de travail concret
            que j'ai appliqué au quotidien, semaine après semaine.
          </p>
        </div>

        <div className="story-timeline">
          <div className="story-step">
            <span className="story-step-date">Mars 2023</span>
            <span className="story-step-event">La réunion. Le silence. La décision de changer quelque chose.</span>
          </div>
          <div className="story-step">
            <span className="story-step-date">Octobre 2023</span>
            <span className="story-step-event">Premiers résultats concrets. Première prise de parole en comité restreint.</span>
          </div>
          <div className="story-step">
            <span className="story-step-date">Septembre 2024</span>
            <span className="story-step-event">J'écris ce guide pour que d'autres n'attendent pas aussi longtemps.</span>
          </div>
        </div>

        <div className="story-author-row">
          <span className="story-sig">Sefo</span>
        </div>
      </div>
    </section>
  );
}
