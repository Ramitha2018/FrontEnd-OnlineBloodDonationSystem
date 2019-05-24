import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-donor-contact',
  templateUrl: './donor-contact.component.html',
  styleUrls: ['./donor-contact.component.css']
})
export class DonorContactComponent implements OnInit {
@Input()
  donor: any;


  constructor() { }

  ngOnInit() {
  }

}
