import { ItemDTO } from "./item-dto";

export interface TracksDTO {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Array<ItemDTO>;
}
