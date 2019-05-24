import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {HttpTestingController} from '@angular/common/http/testing';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  deleteUser(user): Observable <any>{
    console.log(this.authService.token);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json'); // setting the proper headers.
    headers = headers.append( 'Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.authService.loadToken());
    return this.http.post(this.authService.rootURL + '/deleteUser', JSON.stringify(user), {headers: headers});
  }
}
