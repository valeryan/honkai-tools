import { Recommendation } from "../models/recommendation";

export const HOT: Recommendation[] = [
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
          "choice": "1st"
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": "Start"
        }
      ]
    },
    "signet1": {
      "signet": "kalpas",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": "1st"
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": "2nd"
        }
      ]
    },
    "signet2": {
      "signet": "kevin",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": "1st"
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": "2nd"
        }
      ]
    },
    "signet3": {
      "signet": "eden",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": "1st"
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": "Filler"
        },
        {
          "id": 3,
          "signetId": 4,
          "choice": "2nd"
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
          "choice": "Start"
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": "1st"
        }
      ]
    },
    "signet1": {
      "signet": "kalpas",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": "1st"
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": "2nd"
        }
      ]
    },
    "signet2": {
      "signet": "kevin",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": "1st"
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": "2nd"
        }
      ]
    },
    "signet3": {
      "signet": "eden",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": "1st"
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": "Filler"
        },
        {
          "id": 3,
          "signetId": 4,
          "choice": "2nd"
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
