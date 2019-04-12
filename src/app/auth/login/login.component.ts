import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServer: AuthService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const user = form.value.user;
    const pwd = form.value.password;
    const remember = form.value.remember || false;
    this.authServer.doLogin(user, pwd, remember);
  }
}
