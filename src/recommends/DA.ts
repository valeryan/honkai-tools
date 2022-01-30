import { Recommendation } from "../models/recommendation";

export const DA: Recommendation[] = [
  {
    "id": 2,
    "slug": "DA",
    "difficulty": 130,
    "rank": "S",
    "exclusive": {
      "signet": "DA",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": "Start"
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": "Filler"
        },
        {
          "id": 3,
          "signetId": 3,
          "choice": "1st"
        },
        {
          "id": 4,
          "signetId": 4,
          "choice": "2nd"
        },
        {
          "id": 5,
          "signetId": 5,
          "choice": "Filler"
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
          "choice": "2nd"
        },
        {
          "id": 3,
          "signetId": 3,
          "choice": "2nd"
        },
        {
          "id": 5,
          "signetId": 5,
          "choice": "1st"
        },
        {
          "id": 6,
          "signetId": 6,
          "choice": "1st"
        },
        {
          "id": 7,
          "signetId": 7,
          "choice": "1st"
        },
        {
          "id": 8,
          "signetId": 8,
          "choice": "Filler"
        },
        {
          "id": 9,
          "signetId": 9,
          "choice": "1st"
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
