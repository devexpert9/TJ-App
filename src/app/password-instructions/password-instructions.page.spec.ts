import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInstructionsPage } from './password-instructions.page';

describe('PasswordInstructionsPage', () => {
  let component: PasswordInstructionsPage;
  let fixture: ComponentFixture<PasswordInstructionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordInstructionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordInstructionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
