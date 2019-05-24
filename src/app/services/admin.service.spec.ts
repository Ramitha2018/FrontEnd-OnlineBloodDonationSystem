import { TestBed, inject } from '@angular/core/testing';

import { AdminService } from './admin.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from './auth.service';

describe('AdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, FormsModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      providers: [AdminService, AuthService]
    });
  });

  it('should be created', inject([AdminService], (service: AdminService) => {
    expect(service).toBeTruthy();
  }));
});

