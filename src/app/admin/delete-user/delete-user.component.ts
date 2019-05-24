import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  email: string;
  name: string;

  found: boolean;

  donors: any;
  selectedDonor: any;

  constructor(private searchService: SearchService, private toastr: ToastrService, private adminService: AdminService) { }

  ngOnInit() {
    this.found = false;
  }

  onSubmit() {
    if (this.email != undefined || this.name != undefined) {
      this.searchService.adminSearch({email: this.email.toLowerCase(), name: this.name}).subscribe(searchResults => {
        console.log(searchResults);
        if ( searchResults.code == '400') {
          this.toastr.error(searchResults.message, 'Oops!');
          return
        }
        this.donors = searchResults.result;
        this.found = true;
      }, err => {
        this.toastr.error(err.message, 'Oops!');
      });
    } else {
      this.toastr.error('Enter a search criteria', 'Please,');
    }
  }

  onDeleteClick(){
    if (confirm('Are you sure to delete ' + this.selectedDonor.name)) {
      this.adminService.deleteUser(this.selectedDonor.email).subscribe( searchResults => {
        console.log(searchResults);
        if ( searchResults.code == '400') {
          this.toastr.error(searchResults.message, 'Oops!');
          return;
        } else if (searchResults.code == '200') {
          this.toastr.success(searchResults.message, 'Attention');
          return;
        }
      }, err => {
        console.log(err);
        this.toastr.error(err.message, 'Oops!');  // Check and test for erroneous output
        return;
      });
    }
  }

  onClick(donor){
    this.selectedDonor = donor;
  }

}
