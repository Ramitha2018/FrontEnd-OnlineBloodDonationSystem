import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import { DeleteUserComponent } from './delete-user.component';
import { DonorContactComponent} from '../../donor-contact/donor-contact.component';
import {MatCardModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {SidebarComponent} from '../../sidebar/sidebar.component';


describe('DeleteUserComponent', () => {
  let component: DeleteUserComponent;
  let fixture: ComponentFixture<DeleteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatCardModule, HttpClientTestingModule,ToastrModule.forRoot()],
      declarations: [ DeleteUserComponent, DonorContactComponent, SidebarComponent ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
