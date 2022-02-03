import { Support } from "../models/support";

export const supports: Support[] = [
  {
    id: 1,
    name: "Valkyrie Chariot",
    tagline: "Black Hole",
    description:
      "Valkyrie Chariot unleashes a black hole to gather enemies nearby and bleed them. CD: 30s.",
    slug: "VC",
  },
  {
    id: 2,
    name: "Divine Prayer",
    tagline: "Divine Retribution",
    description:
      "Divine Prayer creates a global time fracture during which enemies suffer from Divine Penalty, take Lightning DMG, and stay impaired. CD: 40s.",
    slug: "DP",
  },
  {
    id: 3,
    name: "Snowy Sniper",
    tagline: "Arctic Snow",
    description:
      "Snowy Sniper summons Arctic Snow to freeze enemies and make them take bonus Physical DMG. CD: 60s.",
    slug: "SS",
  },
  {
    id: 4,
    name: "Lightning Empress",
    tagline: "Lightning Charge",
    description: "Lightning Empress restores SP for the Valkyrie deployed.",
    slug: "LE",
  },
  {
    id: 5,
    name: "Vermilion Knight: Eclipse",
    tagline: "Ravaging Flame",
    description:
      "Vermilion Knight: Eclipse wields Might of An-Utu to deal massive AoE Fire DMG (reduced below Difficulty 85) and ignite enemies. CD: 60s.",
    slug: "VKE",
  },
  {
    id: 6,
    name: "Bright Knight: Excelsis",
    tagline: "Knightly Bulwark",
    description:
      "Bright Knight: Excelsis deals hight Physical DMG (reduced below Difficulty 85) and blocks all attacks for the Valkyrie deployed in a short duration. CD: 30s.",
    slug: "BKE",
  },
  {
    id: 7,
    name: "Azure Empyrea",
    tagline: "Empyrean Sunder",
    description:
      "Azure Empyrea casts Empyrean Sunder to gather enemies, deal AoE Fire DMG (reduced below Difficulty 85), and enhance the Valkyrie deployed. CD: 50s.",
    slug: "AE",
  },
  {
    id: 8,
    name: "Blood Rose",
    tagline: "Blood Boost",
    description:
      "Blood Rose enables the Valkyrie deployed to consume HP for a huge Total DMG boost.",
    slug: "BR",
  },
];
