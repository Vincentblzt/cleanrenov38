import { rating, avis } from "../data/avis";

export default function SocialProof() {
  return (
    <section className="social-proof" id="avis">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Avis clients</p>
          <h2>Ce que disent nos clients</h2>
        </div>
        <div className="rating-row">
          <span className="rating-score">{rating.score}</span>
          <span className="rating-detail">{rating.detail}</span>
        </div>
        <div className="avis-grid">
          {avis.map((a) => (
            <div className="avis-card" key={a.id}>
              <div className="avis-stars">★★★★★</div>
              <p>{a.text}</p>
              <div className="avis-author">{a.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
