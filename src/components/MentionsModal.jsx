import { legalMentions } from "../data/legal";
import Modal from "./Modal";

export default function MentionsModal({ onClose }) {
  return (
    <Modal title="Mentions légales" titleId="mentions-title" onClose={onClose}>
      <ul className="mentions-list">
        {legalMentions.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </Modal>
  );
}
