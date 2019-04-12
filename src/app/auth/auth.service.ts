import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel } from './login.model';
import { Token } from './token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: Token;

  constructor(private router: Router, private httpClient: HttpClient) {
    this.token = this.readLogin();
    console.log('Login from localStorage:', this.token);
  }

  isAuthenticated() {
    return this.token != null;
  }

  doLogin(user: string, password: string, remember: boolean) {
    const loginModel = new LoginModel(user, password);

    console.log(loginModel);
    console.log('Remember:', remember);

    this.httpClient
      .post<Token>(environment.IAM_URL + '/token', loginModel, {
        responseType: 'json'
      })
      .subscribe(
        (token: Token) => {
          this.router.navigate(['/mowers']);
          console.log(token);
          this.token = token;

          if (remember) {
            this.rememberLogin();
          }
        },
        error => {
          this.forgetLogin();
          console.log(error);
        }
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
    this.router.navigate(['/login']);
    this.token = null;
    this.forgetLogin();
  }

  getToken() {
    return this.token;
  }

  private readLogin() {
    return JSON.parse(localStorage.getItem('authToken'));
  }

  private rememberLogin() {
    localStorage.setItem('authToken', JSON.stringify(this.token));
  }

  private forgetLogin() {
    localStorage.removeItem('authToken');
  }
}
