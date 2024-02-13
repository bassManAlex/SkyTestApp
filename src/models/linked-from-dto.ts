import { ExternalUrlsDTO } from "./external-urls-dto";

export interface LinkedFromDTO {
  external_urls: ExternalUrlsDTO;
  href: string;
  id: string;
  type: string;
  uri: string;
}
