import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBloodComponent } from './about-blood.component';

describe('AboutBloodComponent', () => {
  let component: AboutBloodComponent;
  let fixture: ComponentFixture<AboutBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
