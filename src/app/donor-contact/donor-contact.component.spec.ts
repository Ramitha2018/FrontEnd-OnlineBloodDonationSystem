import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorContactComponent } from './donor-contact.component';
import {MatCardModule} from '@angular/material';

describe('DonorContactComponent', () => {
  let component: DonorContactComponent;
  let fixture: ComponentFixture<DonorContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [ DonorContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
