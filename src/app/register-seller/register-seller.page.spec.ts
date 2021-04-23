import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSellerPage } from './register-seller.page';

describe('RegisterSellerPage', () => {
  let component: RegisterSellerPage;
  let fixture: ComponentFixture<RegisterSellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSellerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
