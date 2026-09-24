import { useState } from "react";
import logo from "../assets/logo.webp";
import { contact } from "../data/contact";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";
import CtaButton from "./CtaButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site">
      <nav className="nav">
        <a href="#top" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Clean Renov38" />
          <span>Clean Renov38</span>
        </a>
        <ul className="nav-links">
          <li><a href="#prestations">Prestations</a></li>
          <li><a href="#formules">Formules</a></li>
          <li><a href="#avis">Avis clients</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li>
            <a className="nav-phone" href={contact.phoneHref}>
              <PhoneIcon />
              {contact.phone}
            </a>
          </li>
        </ul>
        <div className="nav-right">
          <CtaButton href="#reservation" variant="gold" text="Prendre rendez-vous" className="nav-cta" />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-menu">
          <a href="#prestations" onClick={closeMenu}>Prestations</a>
          <a href="#formules" onClick={closeMenu}>Formules</a>
          <a href="#avis" onClick={closeMenu}>Avis clients</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a className="nav-mobile-phone" href={contact.phoneHref} onClick={closeMenu}>
            <PhoneIcon />
            {contact.phone}
          </a>
        </div>
      )}
    </header>
  );
}
