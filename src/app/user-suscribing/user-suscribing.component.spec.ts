import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSuscribingComponent } from './user-suscribing.component';

describe('UserSuscribingComponent', () => {
  let component: UserSuscribingComponent;
  let fixture: ComponentFixture<UserSuscribingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSuscribingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSuscribingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
