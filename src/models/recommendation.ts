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
  slot1: number;
  slot2?: number;
}

export interface GamePeriod extends Object {
  early: Slots;
  mid: Slots;
  late: Slots;
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
  sigil: GamePeriod;
  supports: GamePeriod;
}
