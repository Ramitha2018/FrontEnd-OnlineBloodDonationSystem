import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {SignuppageComponent} from './signuppage/signuppage.component';
import {QuizComponent} from './quiz/quiz.component';
import {SearchComponent} from './search/search.component';

// Guard
import { AuthGuard } from './services/auth.guard';
import { AdminGuard} from './services/admin.guard';
import {DeleteUserComponent} from './admin/delete-user/delete-user.component';
import {BloodDonateComponent} from './about-blood/blood-donate/blood-donate.component';
import {FunctionBloodComponent} from './about-blood/function-blood/function-blood.component';
import {AboutBloodComponent} from './about-blood/about-blood.component';


const routes: Route[] = [
  { path: '', component: HomepageComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'signup', component: SignuppageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard]},
  { path: 'update', component: QuizComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'search', component: SearchComponent},
  { path: 'admin-search', component: DeleteUserComponent, canActivate: [AdminGuard]},
  { path: 'blood-donate', component: BloodDonateComponent,},
  { path: 'blood-fn', component: FunctionBloodComponent},
  { path: 'about-blood', component: AboutBloodComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
