import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRequestPage } from './vendor-request.page';

describe('VendorRequestPage', () => {
  let component: VendorRequestPage;
  let fixture: ComponentFixture<VendorRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorRequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
