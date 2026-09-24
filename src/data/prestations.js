import imgAspiration from "../assets/prestations/interieur-profondeur.png";
import imgPlastiques from "../assets/prestations/finitions-interieures.png";
import imgVitres from "../assets/prestations/vitres.png";
import imgCarrosserie from "../assets/prestations/lavage-exterieur.png";

export const prestations = [
  {
    id: "aspiration",
    title: "Nettoyage intérieur",
    description: "Aspiration complète et nettoyage minutieux de l'habitacle.",
    image: imgAspiration,
  },
  {
    id: "plastiques",
    title: "Finitions intérieures",
    description: "Plastiques, surfaces et détails soigneusement nettoyés.",
    image: imgPlastiques,
  },
  {
    id: "vitres",
    title: "Vitres",
    description: "Nettoyage intérieur et extérieur pour une visibilité parfaitement claire.",
    image: imgVitres,
  },
  {
    id: "carrosserie",
    title: "Lavage extérieur",
    description: "Nettoyage minutieux de la carrosserie pour révéler tout son éclat.",
    image: imgCarrosserie,
  },
];
