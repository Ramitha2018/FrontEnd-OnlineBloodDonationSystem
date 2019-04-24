import { Component, Input } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {
  title = 'Online Blood Donation System';
  fname: string;
  lname: string;
  dob: string;
  address: string;
  NIC: string;
  contact: string;
  email: string;
  pass: string;

  successAlert;            // USE IT IN THE PAGE TO NOTIFY USER
  emailAlert;
  invalidEmail = false;
  constructor( private service: AuthService, private router: Router, private toastr: ToastrService) {

  }
  signup() {
    console.log(this.fname);
    if (this.fname != undefined && this.lname != undefined && this.dob != undefined && this.address != undefined && this.NIC != undefined && this.contact != undefined && this.email != undefined && this.pass != undefined) {
      this.service.signup(
        {
          fname: this.fname,
          lname: this.lname,
          dob: this.dob,
          address: this.address,
          NIC: this.NIC,
          contact: this.contact,
          email: this.email,
          pass: this.pass
        }).subscribe(
        result => {
          if (result.message = 'verify email') {
            this.toastr.success('Verification Email has been sent. Please verify your email to continue, Redirecting...', 'Success!');
            setTimeout(this.router.navigate(['/']), 5000);
          } else if (result.message = 'email exists') {
            this.toastr.error('Email is already in use. Please try again', 'Oops..');
          } else{
            this.toastr.error( 'Unexpected error occurred. Please try again', 'Oops..');
          }
        }
      );
    } else {
      this.toastr.error('Please fill all fields with valid data', 'Hey!');
    }
  }
  /**login(username, password) {
    this.service.login(username, password);
  }*/
}

