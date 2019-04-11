import { Component, Input } from '@angular/core';
import { AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
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

