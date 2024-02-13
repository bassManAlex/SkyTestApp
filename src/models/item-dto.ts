import { ArtistDTO } from "./artist-dto";
import { ExternalUrlsDTO } from "./external-urls-dto";
import { LinkedFromDTO } from "./linked-from-dto";
import { RestrictionsDTO } from "./restrictions-dto";

export interface ItemDTO {
  artists: Array<ArtistDTO>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrlsDTO;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFromDTO;
  restrictions: RestrictionsDTO;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
