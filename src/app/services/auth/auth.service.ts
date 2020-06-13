import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:8080/api/";

  constructor(private http: HttpClient, private router: Router) {
  }

  // signUp(userDetail: UserDetail): Observable<any> {
  //   let url = this.baseUrl + "registerUser";
  //   return this.http.post(url, userDetail);
  // }  

  login(authRequstParam): Observable<any> {
    let url = this.baseUrl + "authenticate";
    console.log("sussess")
    return this.http.post(url, authRequstParam, { responseType: 'text' as 'json' });
  }

  public welcome(token) {
    let tokenStr = 'Bearer ' + token;
    console.log(tokenStr)
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(this.baseUrl + "hello", { headers, responseType: 'text' as 'json' });
  }

  private setSession(authResult) {
  }

  logout() {
    // Remove the token from the localStorage.  
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  isLoggedIn() {
    // create an instance of JwtHelper class.  
    // let jwtHelper = new JwtHelperServi();

    // get the token from the localStorage as we have to work on this token.  
    let token = localStorage.getItem('token');

    // check whether if token have something or it is null.  
    if (!token) {
      return false;
    }

    // get the Expiration date of the token by calling getTokenExpirationDate(String) method of JwtHelper class. this method accepts a string value which is nothing but a token.  
    if (token) {
      // let expirationDate = jwtHelper.getTokenExpirationDate(token);
      // // check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.  
      // let isExpired = jwtHelper.isTokenExpired(token);
      // return !isExpired;
    }
  }

}
