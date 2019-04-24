import { Component, Input } from '@angular/core';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title = 'Online Blood Donation System';

  constructor( private service: AuthService) {
  }


  /**
  login(username, password) {
    this.service.login(username, password);
  }*/
}

