import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prestations from "./components/Prestations";
import Offres from "./components/Offres";
import SocialProof from "./components/SocialProof";
import AvantApres from "./components/AvantApres";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

export default function CleanRenov38Landing() {
  const [selectedFormule, setSelectedFormule] = useState("standard");

  return (
    <div className="crv38" id="top">
      <Header />
      <main>
        <Hero />
        <Prestations />
        <Offres onSelect={setSelectedFormule} />
        <SocialProof />
        <AvantApres />
        <Reservation selectedFormule={selectedFormule} />
      </main>
      <Footer />
    </div>
  );
}
