import { useState } from "react";
import logo from "../assets/logo.webp";
import { contact } from "../data/contact";
import CgvModal from "./CgvModal";
import MentionsModal from "./MentionsModal";

export default function Footer() {
  const [modal, setModal] = useState(null);

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={logo} alt="Clean Renov38" />
              <span>Clean Renov38</span>
            </div>
            <p>Nettoyage automobile premium, en point fixe à Saint-Ismier ou à domicile, sur les environs.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li>{contact.address}</li>
            </ul>
          </div>
          <div>
            <h4>Informations</h4>
            <ul>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => setModal("mentions")}>
                  Mentions légales
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => setModal("cgv")}>
                  CGV
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4>Nous suivre</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/cleanrenov38/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Clean Renov38. Tous droits réservés.</span>
        </div>
      </div>
      {modal === "mentions" && <MentionsModal onClose={() => setModal(null)} />}
      {modal === "cgv" && <CgvModal onClose={() => setModal(null)} />}
    </footer>
  );
}
