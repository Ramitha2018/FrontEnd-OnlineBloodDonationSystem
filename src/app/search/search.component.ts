
import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../services/auth.service';
import {VerifyService} from '../services/verify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  district: string;
  bloodtype: string;
  name: string;
  email: string;
  needRequest: boolean;

  found: boolean;

  donors: any;
  selectedDonor: any;

  constructor(private searchService: SearchService,
              private authService: AuthService,
              private toastr: ToastrService,
              private verifyService: VerifyService) { }

  ngOnInit() {
    this.found = false;
    this.needRequest = false;
  }

  onSubmit() {
    console.log(this.bloodtype,this.district,this.needRequest,this.email);
    if (this.bloodtype != undefined) {
      if ( this.needRequest === false || (this.needRequest === true && this.email != undefined)) {
        if (this.needRequest === false || (this.needRequest === true && this.verifyService.validateEmail(this.email))) {
          if (this.email != undefined) {
            this.email = this.email.toLowerCase();
          }
          this.selectedDonor = null;
          const query = {
            bldtype: this.bloodtype,
            email: this.email,
            district: this.district,
            needRequest: this.needRequest
          };
          this.searchService.search(query).subscribe(searchResults => {
            console.log(searchResults);
            if (searchResults.message) {
              if (searchResults.code == 200) {
                this.toastr.success(searchResults.message, 'Attention');
                return;
              } else if ( searchResults.code == 400) {
                this.toastr.error(searchResults.message, 'Oops!');
                return;
              }
            }
            this.donors = searchResults.result;
             console.log(this.donors.result);
            this.found = true;
          }, err => {
            this.toastr.error('Error Occurred', 'Oops!');
          });
        } else {
          this.toastr.error('Please Enter a valid email address', 'Error!');
        }
      } else {
        this.toastr.error('Please specify an email');
      }
    } else if (this.district) {
      this.toastr.error('Please specify a blood type');
    } else if (this.district == undefined) {
      this.toastr.error('Please specify at least a blood type');
    }

  }

  onClick(donor) {
    this.selectedDonor = donor;
  }
}
