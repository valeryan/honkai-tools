import { Valkyrie } from "../models/valkyrie";
import { appStore } from "../store/app-store";

import { DA } from "./DA";
import { HOFS } from "./HOFS";
import { HOT } from "./HOT";

class RecommendLoader {
  load(valkyrie?: Valkyrie) {
    if (valkyrie === undefined) {
      appStore.setRecommendations([]);
      return;
    }
    switch (valkyrie.slug) {
      case "DA":
        appStore.setRecommendations(DA);
        break;

      case "HOFS":
        appStore.setRecommendations(HOFS);
        break;

        case "HOT":
          appStore.setRecommendations(HOT);
          break;

      default:
        appStore.setRecommendations([]);
        break;
    }
  }
}

export const recommendLoader: RecommendLoader = new RecommendLoader();
