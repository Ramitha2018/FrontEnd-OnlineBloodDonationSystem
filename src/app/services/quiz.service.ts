import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from './user.model';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap} from 'rxjs/operators';
import { AuthService } from './auth.service';
import {any} from 'codelyzer/util/function';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
  }

  setQuiz(params): Observable<any> {
    if(this.authService.isLoggedIn) {                                           // checking whether user is logged in before execution
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json'); // setting the proper headers.
      headers = headers.append( 'Accept', 'application/json');
      headers = headers.append( 'Authentication', 'Bearer ' + this.authService.token);
      return this.http.post( this.authService.rootURL + '/quiz', JSON.stringify(params), {headers: headers} ).pipe(
        map( response => {
          const result = response as any;
          console.log(result.code);
          if (result.code == 200) {
            return { success: true };
          } else if (result.code == 400){
            return { success: false };
          }
        })
      );
    }
  }
}
