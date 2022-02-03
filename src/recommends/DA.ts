import { ChoiceOptions, Recommend } from "../models/recommend";

export const DA: Recommend[] = [
  {
    "id": 1,
    "slug": "DA",
    "difficulty": 130,
    "rank": "S",
    "exclusive": {
      "signet": "DA",
      "choices": [
        {
          "id": 1,
          "signetId": 1,
          "choice": ChoiceOptions.start
        },
        {
          "id": 2,
          "signetId": 2,
          "choice": ChoiceOptions.filler
        },
        {
          "id": 3,
          "signetId": 3,
          "choice": ChoiceOptions.first
        },
        {
          "id": 4,
          "signetId": 4,
          "choice": ChoiceOptions.second
        },
        {
          "id": 5,
          "signetId": 5,
          "choice": ChoiceOptions.filler
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
          "choice": ChoiceOptions.second
        },
        {
          "id": 3,
          "signetId": 3,
          "choice": ChoiceOptions.second
        },
        {
          "id": 5,
          "signetId": 5,
          "choice": ChoiceOptions.first
        },
        {
          "id": 6,
          "signetId": 6,
          "choice": ChoiceOptions.first
        },
        {
          "id": 7,
          "signetId": 7,
          "choice": ChoiceOptions.first
        },
        {
          "id": 8,
          "signetId": 8,
          "choice": ChoiceOptions.filler
        },
        {
          "id": 9,
          "signetId": 9,
          "choice": ChoiceOptions.first
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
