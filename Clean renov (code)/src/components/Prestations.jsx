import { prestations } from "../data/prestations";

export default function Prestations() {
  return (
    <section className="prestations" id="prestations">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Prestations</p>
          <h2>Votre voiture, impeccable dans les moindres détails</h2>
        </div>
      </div>
      <div className="wrap">
        <div className="presta-grid">
          {prestations.map((p) => (
            <div className="presta-card" key={p.id}>
              <div className="presta-visual">
                {p.image ? (
                  <img src={p.image} alt={p.title} />
                ) : (
                  <div className="presta-visual-frame" aria-hidden="true" />
                )}
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
