export const offres = [
  {
    id: "express",
    name: "Express",
    duration: "45 à 60 minutes",
    price: "60 €",
    featured: false,
    included: [
      "Aspiration intérieur (sols, tapis, sièges, coffre)",
      "Plastiques principaux",
      "Vitres intérieures",
    ],
    excluded: ["Prestation extérieure exclue"],
  },
  {
    id: "standard",
    name: "Standard",
    duration: "60 à 90 minutes",
    price: "80 €",
    featured: true,
    badge: "Le plus choisi",
    included: [
      "Aspiration intérieur (sols, tapis, sièges, coffre)",
      "Plastiques principaux et détails accessibles",
      "Vitres intérieures et extérieures",
      "Nettoyage extérieur (hors shampoing)",
    ],
    excluded: [],
  },
  {
    id: "premium",
    name: "Premium",
    duration: "2h30 à 3h",
    price: "100 €",
    featured: false,
    included: [
      "Aspiration intérieur (sols, tapis, sièges, coffre)",
      "Plastiques principaux et détails accessibles",
      "Vitres intérieures et extérieures",
      "Extérieur intégral avec shampoing appliqué",
    ],
    excluded: [],
  },
];

export const surchargeNote =
  "Un supplément de 40 € peut être appliqué en cas de véhicule très sale ou poils d'animaux.";
