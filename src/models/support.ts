import { BaseModel } from "./base-model";

export interface Support extends BaseModel {
  tag: string;
  description: string;
  slug: string;
}
