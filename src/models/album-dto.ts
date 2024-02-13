import { ArtistDTO } from "./artist-dto";
import { CopyrightDTO } from "./copyrights-dto";
import { ExternalIdsDTO } from "./external-ids-dto";
import { ExternalUrlsDTO } from "./external-urls-dto";
import { ImageDTO } from "./image-dto";
import { RestrictionsDTO } from "./restrictions-dto";
import { TracksDTO } from "./tracks-dto";

export enum AlbumTypeEnum {
  Album = 'album',
  EP = 'EP',
  Single = 'single',
  Compilation = 'compilation'
}

export interface AlbumDTO {
  album_type: AlbumTypeEnum;
  artists: Array<ArtistDTO>;
  available_markets: Array<string>;
  external_urls: ExternalUrlsDTO;
  href: string;
  id: string;
  images: Array<ImageDTO>;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: AlbumTypeEnum;
  uri: string;
}

export interface AlbumExtendedDTO extends AlbumDTO {
  total_tracks: number;
  restrictions: RestrictionsDTO;
  tracks: TracksDTO;
  copyrights: Array<CopyrightDTO>;
  external_ids: ExternalIdsDTO;
  genres: Array<string>;
  label: string;
  popularity: number;

}
