import { BaseModel } from "./base-model";

export interface Signet extends BaseModel {
  description: string;
  type: string;
  nexus?: number;
  choice?: string;
}

export interface SignetGroup extends BaseModel {
  flameChaser: string;
  signets: Signet[];
}

export interface SignetChoice extends Object {
  id: number;
  signetId: number;
  choice: string;
}
