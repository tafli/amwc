import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AuthService } from '../auth/auth.service';
import { Mower, MowerStatus } from './mower.model';
import { Token } from '../auth/token.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MowerService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  loadMowers() {
    const token: Token = this.authService.getToken();

    return this.httpClient.get<Mower[]>(environment.TRACK_URL + '/mowers', {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token.data.id)
        .append('Authorization-Provider', token.data.attributes.provider)
    });
  }

  getMowerStatus(id: string) {
    const token: Token = this.authService.getToken();

    return this.httpClient
      .get<MowerStatus>(environment.TRACK_URL + '/mowers/' + id + '/status', {
        headers: new HttpHeaders()
          .append('Authorization', 'Bearer ' + token.data.id)
          .append('Authorization-Provider', token.data.attributes.provider)
      });
  }
}
