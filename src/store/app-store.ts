import Valkyrie from "../models/valkyrie";
import { Store } from "./store";

interface AppData extends Object {
  valkyries?: Valkyrie[];
}

class AppStore extends Store<AppData> {
  protected data(): AppData {
    return {
      valkyries: [],
    };
  }

  setValkyries(valkyries: Valkyrie[]) {
    this.state.valkyries = valkyries;
  }
}

export const appStore: AppStore = new AppStore();
