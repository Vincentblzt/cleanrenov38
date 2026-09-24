import presentationVideo from "../assets/video/presentation.mp4";
import { contact } from "../data/contact";
import { PhoneIcon, SparkleIcon } from "./Icons";
import CtaButton from "./CtaButton";

const TITLE = "L'excellence du detailing automobile.";

function AnimatedTitle({ text }) {
  let index = 0;
  const words = text.split(" ").map((word, wi) => (
    <span className="word" key={wi}>
      {word.split("").map((char) => {
        const i = index++;
        return (
          <span key={i} className="letter" style={{ "--i": i }} aria-hidden="true">
            {char}
          </span>
        );
      })}
    </span>
  ));

  return <h1 aria-label={text}>{words.flatMap((word, i) => (i === 0 ? [word] : [" ", word]))}</h1>;
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-shader" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <p className="hero-badge">
            <SparkleIcon />
            {contact.zone}
          </p>
          <AnimatedTitle text={TITLE} />
          <p className="lead">
            Des prestations premium pour sublimer et protéger votre véhicule, à domicile ou en point fixe
            (St Ismier).
          </p>
          <div className="hero-cta-group">
            <div className="hero-cta-row">
              <CtaButton href="#reservation" variant="gold" text="Prendre rendez-vous" />
              <CtaButton
                href={contact.phoneHref}
                variant="ghost"
                text={contact.phone}
                icon={PhoneIcon}
                className="cta-no-dot"
              />
            </div>
            <span className="hero-reassure">Réponse sous 24h</span>
          </div>
        </div>
        <div className="hero-visual">
          <video
            src={presentationVideo}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Vidéo de présentation Clean Renov38"
          />
        </div>
      </div>
    </section>
  );
}
