import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionBloodComponent } from './function-blood.component';
import {SidebarComponent} from '../../sidebar/sidebar.component';

describe('FunctionBloodComponent', () => {
  let component: FunctionBloodComponent;
  let fixture: ComponentFixture<FunctionBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionBloodComponent, SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
