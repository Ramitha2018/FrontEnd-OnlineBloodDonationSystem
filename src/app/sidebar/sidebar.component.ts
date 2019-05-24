import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  toProfile() {
    this.router.navigate(['profile']);
  }

  toHome() {
    this.router.navigate(['/']);
  }

  toAboutBlood() {
    this.router.navigate(['aboutBlood']);
  }

  toBloodFn() {
    this.router.navigate(['blood-fn']);
  }

  toDonateBlood() {
    this.router.navigate(['blood-donate']);
  }
}
