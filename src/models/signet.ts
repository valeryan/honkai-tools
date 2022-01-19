import BaseModel from "./model-base";

export interface SignetGroup extends BaseModel {
  flameChaser: string;
  signets: Signet[];
}

export interface Signet extends BaseModel {
  description: string;
  type: string;
  choice?: string;
}

export interface SignetChoice extends Object {
  id: number;
  signetId: number;
  choice: string;
}
