export interface Choice extends Object {
  id: number;
  signetId: number;
  choice: string;
}

export interface ChoiceGroup extends Object {
  signet: string;
  choices: Choice[];
}

export interface Slots extends Object {
  [index: string]: any;
  slot1: number;
  slot2?: number;
}

export interface SetupTypes extends Object {
  emblem: Slots,
  support: Slots
}

export interface GamePeriod extends Object {
  early: SetupTypes;
  mid: SetupTypes;
  late: SetupTypes;
}

export interface Recommendation extends Object {
  id: number;
  slug: string;
  difficulty: number;
  rank: string;
  exclusive: ChoiceGroup;
  signet1: ChoiceGroup;
  signet2: ChoiceGroup;
  signet3: ChoiceGroup;
  setup: GamePeriod;
}
