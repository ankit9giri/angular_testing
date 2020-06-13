import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  form: FormGroup;
  authRequstParam: any = {
    username: "",
    password: ""
  };

  username: string = "admin";
  password: string = "admin";
  
  response: any;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.login();
  }

  login() {

    console.log(this.authRequstParam.username, this.authRequstParam.password)
    this.authRequstParam.username = this.username;
    this.authRequstParam.password = this.password;

    console.log("login", this.authRequstParam)
    if (this.username && this.password) {
      this.authService.login(this.authRequstParam)
        .subscribe(
          (token) => {
            console.log("User is logged in" + token);
            // this.router.navigateByUrl('/');
            this.accessApi(token);
          }
        );
    }
  }

  public accessApi(token) {
    let resp = this.authService.welcome(token);
    resp.subscribe((data) => {
      this.response = data;
      console.log("Inn ", this.response, data);
      this.nextFunction(this.response);

    });
  }
  nextFunction(data) {
    console.log("out ", data);
  }


}