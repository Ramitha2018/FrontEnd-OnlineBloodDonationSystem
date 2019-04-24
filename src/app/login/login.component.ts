import {Component, OnChanges, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'Online Blood Donation System';
  email: string;
  pass: string;


  constructor(private service: AuthService, private router: Router, private toastr: ToastrService) {
  }
  login() {
    if (this.email != undefined && this.pass != undefined) {
      const user = {
        email: this.email,
        pass: this.pass
      }
      // console.log(this.invalidLogin);
      console.log(2);
      console.log('got here');
      // console.dir(credentials);
      this.service.login(user).subscribe(
        result => {
          console.log(result);
          if (result.code == 200) {
            this.service.storeUserdata(result);               // storing user data
            this.router.navigate(['/']);           // use the proper routing
            console.log('success');
          } else if (result.code == 201) {
            this.service.storeUserdata(result);               // storing user data
            this.router.navigate(['/quiz']);       // create the page and route their
            console.log('reroute');
          } else {
            this.toastr.error('Invalid user name/password.', 'Error',);
          }
        }, error => {
          this.toastr.error('Error occurred. Try again', 'Error');
          // this.invalidLogin = true;
          // console.log(this.invalidLogin);
          // console.log(3);
        }
      );
    } else {
      this.toastr.error('Enter both Email and password', 'Error');
    }
  }
  invertInvalidLogin(){
    // this.invalidLogin = !this.invalidLogin;
  }
  ngOnInit() {
  }


}
