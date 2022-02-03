import { BaseModel } from "./base-model";

export interface Support extends BaseModel {
  tagline: string;
  description: string;
  slug: string;
}
