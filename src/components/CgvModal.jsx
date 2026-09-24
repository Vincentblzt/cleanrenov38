import { cgvSections } from "../data/legal";
import Modal from "./Modal";

export default function CgvModal({ onClose }) {
  return (
    <Modal title="Conditions Générales de Vente" titleId="cgv-title" onClose={onClose}>
      {cgvSections.map((section) => (
        <div className="cgv-section" key={section.title}>
          <h4>{section.title}</h4>
          {section.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {section.paragraphsAfter?.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      ))}
    </Modal>
  );
}
