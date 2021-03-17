import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPopupPage } from './auto-popup.page';

describe('AutoPopupPage', () => {
  let component: AutoPopupPage;
  let fixture: ComponentFixture<AutoPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoPopupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
