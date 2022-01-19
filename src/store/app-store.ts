import { Recommendation } from "../models/recommendation";
import { SignetGroup } from "../models/signet";
import Valkyrie from "../models/valkyrie";
import { Store } from "./store";

interface AppData extends Object {
  valkyries: Valkyrie[];
  recommendations: Recommendation[];
  signetGroups: SignetGroup[];
}

class AppStore extends Store<AppData> {
  protected data(): AppData {
    return {
      valkyries: [],
      recommendations: [],
      signetGroups: []
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
}

export const appStore: AppStore = new AppStore();
