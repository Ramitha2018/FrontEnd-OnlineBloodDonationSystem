import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { MatTableModule, MatInputModule , MatToolbarModule , MatListModule , MatDatepickerModule, MatNativeDateModule , MatFormFieldModule} from '@angular/material';
import { AuthService } from './shared/auth.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {Route, RouterModule} from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';

const ROUTES: Route[] = [
  { path: '', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignuppageComponent,
    LoginComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    MatCardModule
  ],
  providers: [AuthService, HttpClientModule],
  bootstrap: [AppComponent]

})
export class AppModule { }
