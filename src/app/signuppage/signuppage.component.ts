import { Component, Input } from '@angular/core';
import { AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss']
})
export class SignuppageComponent {
  title = 'Online Blood Donation System';

  constructor( private service: AuthService) {

  }
  signup(email, password, fname, lname, NIC, contact){
    //this.service.signup(email, password , fname, lname , NIC, contact);
  }
  /**login(username, password) {
    this.service.login(username, password);
  }*/
}

