import { useState } from "react";
import { offres, surchargeNote } from "../data/offres";
import { CheckIcon, CrossIcon, StarIcon } from "./Icons";
import CtaButton from "./CtaButton";

export default function Offres({ onSelect }) {
  const [segment, setSegment] = useState("b2c");

  return (
    <section className="offres" id="formules">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Formules</p>
        </div>

        <div className="segment-toggle" role="group" aria-label="Type de client">
          <button
            type="button"
            className={segment === "b2c" ? "active" : ""}
            aria-pressed={segment === "b2c"}
            onClick={() => setSegment("b2c")}
          >
            B2C
          </button>
          <button
            type="button"
            className={segment === "b2b" ? "active" : ""}
            aria-pressed={segment === "b2b"}
            onClick={() => setSegment("b2b")}
          >
            B2B
          </button>
        </div>

        {segment === "b2c" ? (
          <>
            <h2 className="offres-title">Trois formules, un prix fixe et clair</h2>
            <div className="offres-grid">
              {offres.map((offre) => (
                <div className={`plan${offre.featured ? " featured" : ""}`} key={offre.id}>
                  {offre.badge && (
                    <div className="plan-badge">
                      <StarIcon />
                      {offre.badge}
                    </div>
                  )}
                  <div className="plan-head">
                    <div className="plan-name">{offre.name}</div>
                    <div className="plan-duration">{offre.duration}</div>
                    <div className="plan-price">{offre.price}</div>
                  </div>
                  <ul className="plan-list">
                    {offre.included.map((item) => (
                      <li key={item}><CheckIcon /> {item}</li>
                    ))}
                    {offre.excluded.map((item) => (
                      <li className="excluded" key={item}><CrossIcon /> {item}</li>
                    ))}
                  </ul>
                  <CtaButton
                    href="#reservation"
                    variant={offre.featured ? "gold" : "ghost"}
                    text={`Choisir ${offre.name}`}
                    onClick={() => onSelect?.(offre.id)}
                  />
                </div>
              ))}
            </div>
            <p className="surcharge-note">{surchargeNote}</p>
          </>
        ) : (
          <div className="offres-pro">
            <p className="pro-note">
              Nos prestations sont proposées sur devis, selon vos besoins et le type de véhicule.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
