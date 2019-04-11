import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Online Blood Donation System';
  invalidLogin;
  constructor(private service: AuthService, private router: Router) {
  }

  login(credentials) {
    console.log('got here');
    this.service.login(credentials).subscribe(
      result => {
        if (result == 200) {
          this.router.navigate(['/']);           // use the proper routing
        } else if (result == 303) {
          this.router.navigate(['/quiz']);       // create the page and route their
        } else {
          this.invalidLogin = true;
        }
      }
    );
  }
  ngOnInit() {
  }

}
