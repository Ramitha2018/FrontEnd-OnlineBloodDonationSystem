import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogoutClick() {
    this.authService.logOut();
  }

  onSearchClick() {
    this.router.navigate(['search']).then();
  }
}
