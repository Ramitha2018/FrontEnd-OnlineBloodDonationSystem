/**
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCardModule, MatTableModule, MatTabsModule} from '@angular/material';
import { BloodDonateComponent } from './blood-donate.component';
import {SidebarComponent} from '../../sidebar/sidebar.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('BloodDonateComponent', () => {
  let component: BloodDonateComponent;
  let fixture: ComponentFixture<BloodDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, FormsModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ BloodDonateComponent, SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
