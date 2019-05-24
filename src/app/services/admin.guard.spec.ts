import { TestBed, async, inject } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('AdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, FormsModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      providers: [AdminGuard]
    });
  });

  it('should ...', inject([AdminGuard], (guard: AdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
