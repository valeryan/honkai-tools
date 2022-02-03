import { ChoiceOptions, Recommend } from "../models/recommend";

export const HOT: Recommend[] = [
  {
    "id": 1,
    "slug": "HOT",
    "difficulty": 140,
    "rank": "S",
    "variant": "Burst Mode Spam",
    "exclusive": {
      "signet": "HOT",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": ChoiceOptions.first
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": ChoiceOptions.start
        }
      ]
    },
    "signet1": {
      "signet": "kalpas",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": ChoiceOptions.first
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": ChoiceOptions.second
        }
      ]
    },
    "signet2": {
      "signet": "kevin",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": ChoiceOptions.first
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": ChoiceOptions.second
        }
      ]
    },
    "signet3": {
      "signet": "eden",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": ChoiceOptions.first
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": ChoiceOptions.filler
        },
        {
          "id": 3,
          "signetId": 4,
          "choice": ChoiceOptions.second
        }
      ]
    },
    "setup": {
      "early": {
        "emblem": {"slot1": 1 },
        "support": { "slot1": 1, "slot2": 3 }
      },
      "mid": {
        "emblem": { "slot1": 1, "slot2": 2 },
        "support": { "slot1": 2, "slot2": 3 }
      },
      "late": {
        "emblem": {"slot1": 1 },
        "support": { "slot1": 1, "slot2": 3 }
      }
    }
  },
  {
    "id": 2,
    "slug": "HOT",
    "difficulty": 140,
    "rank": "S",
    "variant": "Basic ATK Spam",
    "exclusive": {
      "signet": "HOT",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": ChoiceOptions.start
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": ChoiceOptions.first
        }
      ]
    },
    "signet1": {
      "signet": "kalpas",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": ChoiceOptions.first
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": ChoiceOptions.second
        }
      ]
    },
    "signet2": {
      "signet": "kevin",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": ChoiceOptions.first
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": ChoiceOptions.second
        }
      ]
    },
    "signet3": {
      "signet": "eden",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": ChoiceOptions.first
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": ChoiceOptions.filler
        },
        {
          "id": 3,
          "signetId": 4,
          "choice": ChoiceOptions.second
        }
      ]
    },
    "setup": {
      "early": {
        "emblem": {"slot1": 1 },
        "support": { "slot1": 1, "slot2": 3 }
      },
      "mid": {
        "emblem": { "slot1": 1, "slot2": 2 },
        "support": { "slot1": 2, "slot2": 3 }
      },
      "late": {
        "emblem": {"slot1": 1 },
        "support": { "slot1": 1, "slot2": 3 }
      }
    }
  }
];
