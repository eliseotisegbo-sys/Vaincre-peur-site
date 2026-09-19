export function Story() {
  return (
    <section className="block fog reveal-on-scroll" id="histoire">
      <div className="wrap story-wrap">
        <div className="section-head">
          <p className="kicker">L'ORIGINE</p>
          <h2>Ce guide est né d'une phrase qu'Élise n'a pas osé dire.</h2>
        </div>

        <div className="story-body">
          <p>
            Cotonou, mars 2023. Élise est en réunion dans un cabinet de conseil.
            Le directeur présente un projet. Il demande des retours. Élise a une objection
            précise, documentée. Elle ouvre la bouche. Rien ne sort. Sa gorge se serre.
            Son cœur accélère. Elle baisse les yeux. La réunion continue sans elle.
          </p>

          <blockquote className="story-quote">
            « Ce n'est pas que je n'ai pas le courage. C'est que mon corps décide avant moi. »
          </blockquote>

          <p>
            Six mois plus tard, Élise apprend qu'elle n'a pas obtenu le poste pour lequel
            elle candidatait. La raison notée dans l'évaluation : « manque d'affirmation
            dans les échanges collectifs ».
          </p>

          <p className="story-turning">
            Jusqu'au jour où elle a arrêté d'attendre d'être prête.
          </p>

          <p>
            C'est à partir de son parcours que ce guide a été conçu : pas une théorie,
            pas un séminaire de motivation, mais un protocole de travail concret
            — appliqué au quotidien, semaine après semaine.
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
            <span className="story-step-event">Le guide est écrit pour que d'autres n'attendent pas aussi longtemps.</span>
          </div>
        </div>

        <div className="story-author-row">
          <span className="story-sig">— Sefo</span>
          <p className="story-disclaimer">Prénom modifié à la demande de l'intéressée.</p>
        </div>
      </div>
    </section>
  );
}
