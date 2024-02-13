import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessTokenDTO } from '../models/access-token-dto';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private baseApiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) { }

  public getAccessToken(clientId: string, secret: string): Observable<AccessTokenDTO> {
    const url = 'https://accounts.spotify.com/api/token';
    const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url, body, { headers: headers }) as Observable<AccessTokenDTO>;
  }

  public getNewReleases(offset: number, limit: number): Observable<Object> {
    return this.http.get(`${this.baseApiUrl}/browse/new-releases?offset=${offset}&limit=${limit}`);
  }

  public search(queryString: string) {
    return this.http.get(`${this.baseApiUrl}/search?q=${queryString}&type=album`);
  }

  public getAlbum(albumId: string) {
    return this.http.get(`${this.baseApiUrl}/albums/${albumId}`)
  }
}
