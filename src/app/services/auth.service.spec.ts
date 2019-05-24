import { TestBed, inject } from '@angular/core/testing';
import {AuthService} from './auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';



describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, FormsModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});

