import {Component, Input, OnInit} from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { formatDate, SlicePipe} from '@angular/common';
import {VerifyService} from '../services/verify.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit{
  title = 'Online Blood Donation System';
  fname: string;
  lname: string;
  dob: string;
  address: string;
  NIC: string;
  contact: string;
  email: string;
  pass: string;

  jstoday = new Date();
  today: string;

  constructor( private service: AuthService, private router: Router, private toastr: ToastrService, private verifyService: VerifyService) {

  }
  signup() {
    console.log(this.dob);
    if (this.fname != undefined && this.lname != undefined && this.dob != undefined && this.address != undefined &&
      this.NIC != undefined && this.contact != undefined && this.email != undefined && this.pass != undefined) {
      if (this.verifyService.validateEmail(this.email)) {
        if (this.verifyService.validatePhone(this.contact)) {
          this.service.signup(
            {
              fname: this.fname,
              lname: this.lname,
              dob: this.dob,
              address: this.address,
              NIC: this.NIC,
              contact: this.contact,
              email: this.email.toLowerCase(),
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
          this.toastr.error('Please enter a valid phone number', 'Error!');
          return;
        }
      } else {
        this.toastr.error('Please enter a valid email address', 'Error!');
        return;
      }
    } else {
      this.toastr.error('Please fill all fields with valid data', 'Hey!');
    }
  }

  ngOnInit(){
// Setting the minimum date available for selection as date of birth
    const temp = formatDate(this.jstoday, 'yyyy-MM-dd', 'en-US' , '+0530');
    const tempp = temp.slice(0,4);
    const temppp = Number(tempp) - 18;
    const tempppp = temp.slice(4);
    this.today = temppp + tempppp;
    console.log(this.today);
  }

}

