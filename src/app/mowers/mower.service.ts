import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AuthService } from '../auth/auth.service';
import { Mower, MowerStatus } from './mower.model';
import { Token } from '../auth/token.model';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MowerService implements OnInit, OnDestroy {
  private _mowers = new BehaviorSubject<Mower[]>([]);
  private _mowerStatus = new BehaviorSubject<MowerStatus>(null);

  interval: Subscription;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    this.interval = interval(5000)
      .pipe(
        tap(() => console.log('Loading Mowers...')),
        startWith(0),
        switchMap(() => this.loadMowers())
      )
      .subscribe((mowers: Mower[]) => this._mowers.next(mowers));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.interval.unsubscribe();
  }

  get mowersObservable() {
    return this._mowers.asObservable();
  }

  get mowerStatus() {
    return this._mowerStatus;
  }

  private loadMowers() {
    const token: Token = this.authService.getToken();

    return this.httpClient.get<Mower[]>(environment.TRACK_URL + '/mowers', {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer ' + token.data.id)
        .append('Authorization-Provider', token.data.attributes.provider)
    });
  }

  loadMowerStatus(id: string) {
    const token: Token = this.authService.getToken();

    this.httpClient.get<MowerStatus>(
      environment.TRACK_URL + '/mowers/' + id + '/status',
      {
        headers: new HttpHeaders()
          .append('Authorization', 'Bearer ' + token.data.id)
          .append('Authorization-Provider', token.data.attributes.provider)
      }
    ).subscribe(
      (status: MowerStatus) => this.mowerStatus.next(status)
    );
  }
}
