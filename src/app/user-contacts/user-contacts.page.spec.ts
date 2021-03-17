import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactsPage } from './user-contacts.page';

describe('UserContactsPage', () => {
  let component: UserContactsPage;
  let fixture: ComponentFixture<UserContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContactsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
