export enum ChoiceOptions {
  first = "1st",
  second = "2nd",
  start = "Start",
  filler = "Filler"
}

export interface Choice extends Object {
  id: number;
  signetId: number;
  choice: ChoiceOptions;
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

export interface Recommend extends Object {
  id: number;
  slug: string;
  difficulty: number;
  rank: string;
  variant?: string;
  isActive?: boolean;
  exclusive: ChoiceGroup;
  signet1: ChoiceGroup;
  signet2: ChoiceGroup;
  signet3: ChoiceGroup;
  setup: GamePeriod;
}
