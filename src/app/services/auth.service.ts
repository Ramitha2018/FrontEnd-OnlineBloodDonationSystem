import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from './user.model';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  rootURL = 'http://localhost:2400'; // Move to environment variables
  user: any;
  token: any;
  isLoggedIn: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User;
  }

  ngOnInit(){
    this.isLoggedIn = false;
  }

  login(credentials): Observable<any> {
    console.log('here');
    console.log(credentials);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append( 'Accept', 'application/json');
    return this.http.post(this.rootURL + '/auth', JSON.stringify(credentials), {headers: headers}).pipe(
      map( response  => {
        console.log('maybe?');
        console.log(response);
        const result = response as any;
        console.log(result.code);
        if (!(result)) {
          return false;
        } else if (result.code == 200) {
          return {code: 200, token: result.token, type: result.userType };
        } else if (result.code == 201) {
          return {code: 201, token: result.token, type: result.userType };
        } else {
          return false;
        }
      })
    );
  }
  signup(params): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append( 'Accept', 'application/json');
    return this.http.post(this.rootURL + '/createUser', JSON.stringify(params), {headers: headers}).pipe(
      map( response => {
        const result = response as any;
        if (!(result)) {
          return false;
        } else if (result.code == 200) {
          return {message: 'verify email'};
        } else if (result.code == 401){
          return {message: 'email exists'};
        } else {
          return {message: 'failure'};
        }
      })
    );
  }

  storeUserdata(userData) {
    // localStorage.setItem('id_token', token);
    // console.log(token);
    sessionStorage.setItem('id_token', userData.token);
    localStorage.setItem('type', userData.type);
    localStorage.setItem('useremail', userData.email);
    this.token = userData.token;
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
    this.token = null;
    this.user = null;
    localStorage.clear();
    sessionStorage.clear();
  }


}
