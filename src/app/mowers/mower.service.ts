import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AuthService } from '../auth/auth.service';
import { Mower, MowerStatus } from './mower.model';
import { Token } from '../auth/token.model';
import { startWith, switchMap } from 'rxjs/operators';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MowerService implements OnDestroy {
  private mowers$ = new BehaviorSubject<Mower[]>([]);
  private mowerStatus$ = new BehaviorSubject<MowerStatus>(null);

  interval: Subscription;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    this.interval = interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.loadMowers())
      )
      .subscribe((mowers: Mower[]) => {
        this.mowers$.next(mowers);
        mowers.forEach(mower => this.loadMowerStatus(mower.id));
      });
  }

  ngOnDestroy() {
    this.interval.unsubscribe();
  }

  get mowersObservable() {
    return this.mowers$.asObservable();
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
      (status: MowerStatus) => this.mowerStatus$.next(status)
    );
  }
}
