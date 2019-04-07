import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel } from './login.model';
import { Token } from './token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: Token;

  constructor(private router: Router, private httpClient: HttpClient) {}

  isAuthenticated() {
    return this.token != null;
  }

  doLogin(user: string, password: string) {
    const loginModel = new LoginModel(user, password);

    console.log(loginModel);

    this.httpClient
      .post<Token>(environment.IAM_URL + '/token', loginModel, {
        responseType: 'json'
      })
      .subscribe(
        (token: Token) => {
          this.router.navigate(['/mowers']);
          console.log(token);
          this.token = token;
        },
        error => console.log(error)
      );
  }

  doLogout() {
    this.httpClient
      .delete(environment.IAM_URL + '/token/' + this.token.data.id, {
        headers: new HttpHeaders()
          .append('Authorization', 'Bearer' + this.token.data.id)
          .append('Authorization-Provider', this.token.data.attributes.provider)
      })
      .subscribe((response: Response) => {
        console.log(response);
      });
    this.router.navigate(['/']);
    this.token = null;
  }

  getToken() {
    return this.token;
  }
}
