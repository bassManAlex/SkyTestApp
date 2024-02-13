import { ExternalUrlsDTO } from "./external-urls-dto";

export interface ArtistDTO {
  external_urls: ExternalUrlsDTO,
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
