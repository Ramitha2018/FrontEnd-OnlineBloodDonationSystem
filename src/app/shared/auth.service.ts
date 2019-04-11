import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from './user.model';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootURL = 'http://localhost:2400'; // Move to environment variables
  public user: User;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User;
  }

  login(credentials) {
    console.log('here');
    console.log(credentials);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append( 'Accept', 'application/json');
    return this.http.post(this.rootURL + '/auth', JSON.stringify(credentials), {headers: headers}).pipe(
      map( response  => {
        console.log('maybe?');
        console.log(response);
        const result = <any> response;
        console.log(result);
        if (!(result)) {
          return false;
        } else if (result.status == 200) {
            localStorage.setItem('token', result.token);
          return 200;
        } else if (result.status == 303) {
            localStorage.setItem( 'token', result.token);
          return 303;
        }
      })
    );

  }
}
