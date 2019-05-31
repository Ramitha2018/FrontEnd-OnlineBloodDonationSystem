import {Component, OnChanges, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ToastrService} from 'ngx-toastr';
import {VerifyService} from '../services/verify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'Online Blood Donation System';
  email: string;
  pass: string;


  constructor(private service: AuthService, private router: Router, private toastr: ToastrService, private verifyService: VerifyService) {
  }
  login() {
    if (this.email != undefined && this.pass != undefined) {
      if (this.verifyService.validateEmail(this.email)) {
        const user = {
          email: this.email.toLowerCase(),
          pass: this.pass
        }
        console.log(2);
        console.log('got here');

        this.service.login(user).subscribe(
          result => {
            console.log('result');
            console.log(result);
            if (result.code == 200) {
              this.service.storeUserData(result);               // storing user data
              this.router.navigate(['/profile']);           // use the proper routing
              console.log('success');
            } else if (result.code == 201) {
              this.service.storeUserData(result);               // storing user data
              this.router.navigate(['/quiz']);       // create the page and route their
              console.log('reroute');
            } else if (result.code == 401) {
              this.toastr.error('Invalid user name or password. Try again', 'Error!',);
            } else if (result.code == 303) {
              this.toastr.error( 'Please verify your email', 'Attention');
            }
          }, error => {
            this.toastr.error('Error occurred. Try again', 'Error!');
          }
        );
      } else {
        this.toastr.error('Please enter a valid email address', 'Error!')
      }
    } else {
      this.toastr.error('Enter both Email and password', 'Error!');
    }
  }

  ngOnInit() {
  }


}
