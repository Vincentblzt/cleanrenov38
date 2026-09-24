import { avantApres } from "../data/avantApres";

export default function AvantApres() {
  return (
    <section className="avant-apres" id="avant-apres">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Résultats</p>
          <h2>Avant / après</h2>
        </div>
        <div className="avant-apres-grid">
          {avantApres.map((pair) => (
            <div className="avant-apres-pair" key={pair.id}>
              <div className="avant-apres-item">
                <img src={pair.before} alt="Intérieur du véhicule avant l'intervention" />
                <span className="avant-apres-tag tag-avant">Avant</span>
              </div>
              <div className="avant-apres-item">
                <img src={pair.after} alt="Intérieur du véhicule après l'intervention" />
                <span className="avant-apres-tag tag-apres">Après</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
