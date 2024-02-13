import { AlbumDTO } from "./album-dto";

export interface AlbumListDTO  {
  href: string;
  items: Array<AlbumDTO>;
  limit: number
  next: string | undefined;
  offset: number;
  previous: string | undefined;
  total: number
}
