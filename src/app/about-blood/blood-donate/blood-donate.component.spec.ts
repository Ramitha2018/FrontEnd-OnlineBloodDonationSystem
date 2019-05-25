import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule, MatTabsModule} from '@angular/material';
import { BloodDonateComponent } from './blood-donate.component';
import {SidebarComponent} from '../../sidebar/sidebar.component';

describe('BloodDonateComponent', () => {
  let component: BloodDonateComponent;
  let fixture: ComponentFixture<BloodDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTabsModule, MatTableModule],
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
