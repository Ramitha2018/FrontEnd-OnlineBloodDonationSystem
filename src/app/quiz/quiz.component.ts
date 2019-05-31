import { Component, OnInit } from '@angular/core';
import {QuizService} from '../services/quiz.service';
import {ToastrService} from 'ngx-toastr';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent{
  gender: string;
  district: string;
  bloodtype: string;
  recentdonate: string;
  currenthealth: string;
  pasthealth: string;
  available: string;

  constructor(private service: QuizService, private toastr: ToastrService, private router: Router) { }

// Updating user databsse
  onSubmit() {
    // Check for empty responses
    if(this.gender != '' && this.pasthealth != '' && this.bloodtype != '' && this.currenthealth != '' &&
      this.recentdonate != '' && this.district != ''){
      this.service.setQuiz({
        gender: this.gender,
        district: this.district,
        bloodtype: this.bloodtype,
        recentdonate: this.recentdonate,
        currenthealth: this.currenthealth,
        pasthealth: this.pasthealth,
        available: this.available
    }).subscribe( result => {
        if (!result.success) {
          this.toastr.error('Error occurred. Please try again.', 'Sorry!');
        } else if (result.success) {
          this.toastr.success('Account updated.', 'Success!');
          setTimeout( this.router.navigate(['profile']), 2500);
        }
      }, err => {
        this.toastr.error(err.message, 'Oops!');
      });
    } else {
      this.toastr.error('Please fill all the fields', 'Hold on')
    }
  }
}

