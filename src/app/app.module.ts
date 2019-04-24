import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule, MatInputModule , MatToolbarModule , MatListModule , MatDatepickerModule, MatNativeDateModule , MatFormFieldModule} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';


// Components
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';


// Services
import { AuthService } from './services/auth.service';
import { QuizService } from './services/quiz.service';

// Guard
import { AuthGuard } from './services/auth.guard';
import { ProfileComponent } from './profile/profile.component';


const ROUTES: Route[] = [
  { path: '', component: HomepageComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'signup', component: SignuppageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard]},
  { path: 'update', component: QuizComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignuppageComponent,
    LoginComponent,
    QuizComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened : 1,
      autoDismiss : true
    }),
    RouterModule.forRoot(
      ROUTES , {onSameUrlNavigation: 'reload'}
    ),
    HttpClientModule,
    // AppRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCardModule,
    NgbModule
  ],
  providers: [AuthService, HttpClientModule, QuizService],
  bootstrap: [AppComponent]

})
export class AppModule { }
