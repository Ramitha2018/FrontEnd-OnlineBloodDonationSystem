import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private authService: AuthService) { }

// the service to call the backend for search results
  search(query): Observable <any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json'); // setting the proper headers.
    headers = headers.append( 'Accept', 'application/json');

    return this.http.post(this.authService.rootURL + '/search', JSON.stringify(query), {headers: headers});
  }

// the service to call the backend for admin's search inquiries
  adminSearch(query): Observable <any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json'); // setting the proper headers.
    headers = headers.append( 'Accept', 'application/json');
    headers = headers.append( 'Authorization', 'Bearer ' + this.authService.token);

    return this.http.post(this.authService.rootURL + '/adminSearch', JSON.stringify(query), {headers: headers});
  }

// The service to delete user's search requests
  removeRequests(): Observable <any>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json'); // setting the proper headers.
    headers = headers.append( 'Accept', 'application/json');
    headers = headers.append( 'Authorization', 'Bearer ' + this.authService.token);

    return this.http.post(this.authService.rootURL + '/deleteReq', null, {headers: headers});
  }
}
