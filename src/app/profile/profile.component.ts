import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {VerifyService} from '../services/verify.service';
import {AdminService} from '../services/admin.service';
import {Router} from '@angular/router';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;
  email: string;
  nic: string;
  bldtype: string;
  address: string;
  district: string;
  contact: string;
  dob: string;
  gender: string;
  recentdonate: string;
  currenthealth: string;
  pasthealth: string;
  available: string;

  editMode: boolean;

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private verifyService: VerifyService,
              private adminService: AdminService,
              private searchService: SearchService,
              private router: Router) { }

  ngOnInit() {
    this.editMode = false;
    this.getUserData();
  }

  getUserData() {
    const userData = this.authService.getUserData();
      this.name = userData.name;
      this.email =  userData.email;
      this.nic = userData.NIC;
      this.bldtype = userData.blood_type;
      this.address = userData.address;
      this.district = userData.district;
      this.contact = userData.contact_number;
      this.dob = userData.DOB;
      this.gender = userData.gender;
      this.recentdonate = userData.recentdonate;
      this.pasthealth = userData.pasthealth;
      this.currenthealth = userData.currenthealth;
      this.available = userData.available;

  }
// toggling to edit mode
  toggle() {
    this.editMode = !this.editMode;
  }
// toggling back from edit mode and submitting profile changes
  onSubmit() {
    if (this.verifyService.validatePhone(this.contact)) {
      this.editMode = false;
      const user = {
        name: this.name,
        email: this.email,
        NIC: this.nic,
        blood_type: this.bldtype,
        address: this.address,
        district: this.district,
        contact: this.contact,
        DOB: this.dob,
        gender: this.gender,
        recentdonate: this.recentdonate,
        pasthealth: this.pasthealth,
        currenthealth: this.currenthealth,
        available: this.available
      };
      this.authService.setUserData(user).subscribe(result => {
        console.log(result);
        this.authService.setUserDataLocally(user);
        this.toastr.success('Profile Successfully Updated', 'Success!');
      }, err => {
        this.name = this.authService.user.name;
        this.address = this.authService.user.address;
        this.contact = this.authService.user.contact_number;
        this.district = this.authService.user.district;
        this.recentdonate = this.authService.user.recentdonate;
        this.pasthealth = this.authService.user.pasthealth;
        this.currenthealth = this.authService.user.currenthealth;
        this.available = this.authService.user.available;
        this.toastr.error('Failed to update profile. Try again,', 'Oops!');
      });
    } else {
      this.toastr.error('Please enter a valid phone number', 'Error!');
    }
  }

  deleteSelf() {
    if (confirm('Are you sure to deactivate your account?')) {
      this.adminService.deleteUser(this.email.toLowerCase()).subscribe( res => {
        console.log(res);
        if (res.code == '400') {
          this.toastr.error(res.message, 'Oops!');
          return;
        } else if (res.code == '200') {
          this.toastr.success('Account has been deleted!', 'Attention!');
          this.authService.logOut();
          this.router.navigate(['/']);
        }
      });
    }
  }

  clearRequests() {
    if (confirm('Are you sure to remove ALL search requests?')) {
      this.searchService.removeRequests().subscribe(res => {
        console.log(res);
        if (res.code == '400') {
          this.toastr.error(res.message, 'Oops!');
          return;
        } else if (res.code == '200') {
          this.toastr.success('All search requests have been cleared', 'Success!');
        }
      }, err => {
        this.toastr.error('Error Occurred. Try again', 'Oops!');
      });
    }
  }
}
