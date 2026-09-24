import { useEffect, useState } from "react";
import { contact } from "../data/contact";
import CtaButton from "./CtaButton";

const initialForm = {
  nom: "",
  tel: "",
  formule: "standard",
  lieu: "atelier",
  adresse: "",
  message: "",
};

const FORMULE_LABELS = {
  express: "Express — 60 €",
  standard: "Standard — 80 €",
  premium: "Premium — 100 €",
};

function buildMailtoUrl(form) {
  const lieuLabel = form.lieu === "domicile" ? `À domicile (${form.adresse})` : `Point fixe (${contact.address})`;
  const lines = [
    `Nom : ${form.nom}`,
    `Téléphone : ${form.tel}`,
    `Formule : ${FORMULE_LABELS[form.formule]}`,
    `Intervention : ${lieuLabel}`,
  ];
  if (form.message) {
    lines.push(`Précisions : ${form.message}`);
  }
  const subject = `Demande de rendez-vous — ${form.nom || "Client"}`;
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export default function Reservation({ selectedFormule }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (selectedFormule) {
      setForm((f) => ({ ...f, formule: selectedFormule }));
    }
  }, [selectedFormule]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = buildMailtoUrl(form);
  };

  return (
    <section id="reservation">
      <div className="wrap">
        <div className="booking-box">
          <div>
            <h3>Prendre rendez-vous</h3>
            <p className="sub">
              Indiquez vos coordonnées et la formule souhaitée, nous confirmons le créneau sous 24h.
            </p>
            <form className="booking" onSubmit={handleSubmit}>
              <div className="field-row">
                <div>
                  <label htmlFor="nom">Nom</label>
                  <input type="text" id="nom" name="nom" value={form.nom} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="tel">Téléphone</label>
                  <input type="tel" id="tel" name="tel" value={form.tel} onChange={handleChange} required />
                </div>
              </div>
              <div>
                <label htmlFor="formule">Formule souhaitée</label>
                <select id="formule" name="formule" value={form.formule} onChange={handleChange}>
                  <option value="express">Express — 60 €</option>
                  <option value="standard">Standard — 80 €</option>
                  <option value="premium">Premium — 100 €</option>
                </select>
              </div>
              <div>
                <label htmlFor="lieu">Type d'intervention</label>
                <select id="lieu" name="lieu" value={form.lieu} onChange={handleChange}>
                  <option value="atelier">Point fixe ({contact.address})</option>
                  <option value="domicile">À domicile</option>
                </select>
              </div>
              {form.lieu === "domicile" && (
                <div>
                  <label htmlFor="adresse">Adresse d'intervention</label>
                  <input
                    type="text"
                    id="adresse"
                    name="adresse"
                    placeholder="Numéro, rue, ville"
                    value={form.adresse}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              <div>
                <label htmlFor="message">Précisions (véhicule, créneau souhaité)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Ex : Peugeot 308, disponible mardi après-midi"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <div className="booking-submit">
                <CtaButton as="button" type="submit" variant="gold" text="Envoyer la demande" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
