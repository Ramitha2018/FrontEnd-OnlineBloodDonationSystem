import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from './user.model';
import { Observable } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  rootURL = 'http://localhost:2400'; // Move to environment variables
  user: any;
  token: any;
  userType: any;
  isLoggedIn: boolean;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
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
        console.log(response);
        const result = response as any;
        this.user = result.userData;
        console.log(this.user);
        console.log(typeof (this.user));
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

  storeUserData(userData) {
    sessionStorage.setItem('id_token', userData.token);
    localStorage.setItem('type', userData.type);
    localStorage.setItem('useremail', userData.email);
    localStorage.setItem('user', JSON.stringify(this.user));
    console.log(this.user);
    console.log(typeof(this.user));
    this.userType = userData.type;
    this.token = userData.token;
    this.isLoggedIn = true;
    console.log(this.token);
  }

  getUserData() {
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
    return JSON.parse(user);
  }

  setUserData(user): Observable <any> {
// Setting user data on the database
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json'); // setting the proper headers.
    headers = headers.append( 'Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.loadToken());
    return this.http.post(this.rootURL + '/setUser', JSON.stringify(user), {headers: headers});
  }

  setUserDataLocally(user) {
    localStorage.setItem('user', JSON.stringify(user)); // Setting User Data locally
    console.log(localStorage.getItem('user'));
  }

  logOut() {
    this.isLoggedIn = false;
    this.token = null;
    this.user = null;
    this.userType = null;
    localStorage.clear();
    sessionStorage.clear();
  }

  loadToken() {
    const token = sessionStorage.getItem('id_token');
    this.token = token;
    return token;
  }

}
