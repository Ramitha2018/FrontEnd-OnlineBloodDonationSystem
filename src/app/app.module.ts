import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule, MatInputModule , MatToolbarModule , MatListModule , MatDatepickerModule, MatNativeDateModule , MatFormFieldModule} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';

// Services
import { AuthService } from './services/auth.service';
import { QuizService } from './services/quiz.service';
import { SearchService} from './services/search.service';
import { AdminService } from './services/admin.service';
import { VerifyService} from './services/verify.service';


// Components
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { DonorContactComponent } from './donor-contact/donor-contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DeleteUserComponent } from './admin/delete-user/delete-user.component';
import { AboutBloodComponent } from './about-blood/about-blood.component';
import { FunctionBloodComponent } from './about-blood/function-blood/function-blood.component';
import { BloodDonateComponent } from './about-blood/blood-donate/blood-donate.component';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignuppageComponent,
    LoginComponent,
    QuizComponent,
    ProfileComponent,
    SearchComponent,
    DonorContactComponent,
    SidebarComponent,
    DeleteUserComponent,
    AboutBloodComponent,
    FunctionBloodComponent,
    BloodDonateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened : 1,
      autoDismiss : true
    }),
    HttpClientModule,
    AppRoutingModule,
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
  providers: [AuthService, HttpClientModule, QuizService, SearchService, AdminService, VerifyService],
  bootstrap: [AppComponent]

})
export class AppModule { }
