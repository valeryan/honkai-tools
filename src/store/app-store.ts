import { Emblem } from "../models/emblem";
import { Recommendation } from "../models/recommendation";
import { SignetGroup } from "../models/signet";
import { Support } from "../models/support";
import { Valkyrie } from "../models/valkyrie";
import { Store } from "./store";

interface AppData extends Object {
  valkyries: Valkyrie[];
  recommendations: Recommendation[];
  signetGroups: SignetGroup[];
  emblems: Emblem[];
  supports: Support[];
}

class AppStore extends Store<AppData> {
  protected data(): AppData {
    return {
      valkyries: [],
      recommendations: [],
      signetGroups: [],
      emblems: [],
      supports: []
    };
  }

  setValkyries(valkyries: Valkyrie[]) {
    this.state.valkyries = valkyries;
  }

  setRecommendations(recommendations: Recommendation[]) {
    this.state.recommendations = recommendations;
  }

  setSignets(signetGroups: SignetGroup[]) {
    this.state.signetGroups = signetGroups;
  }

  setEmblems(emblems: Emblem[]) {
    this.state.emblems = emblems;
  }

  setSupports(supports: Emblem[]) {
    this.state.supports = supports;
  }
}

export const appStore: AppStore = new AppStore();
