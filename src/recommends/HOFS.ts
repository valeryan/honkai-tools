import { Recommendation } from "../models/recommendation";

export const HOFS: Recommendation[] = [
  {
    "id": 1,
    "slug": "HOFS",
    "difficulty": 140,
    "rank": "S",
    "exclusive": {
      "signet": "HOFS",
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
