import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsellProductsPage } from './upsell-products.page';

describe('UpsellProductsPage', () => {
  let component: UpsellProductsPage;
  let fixture: ComponentFixture<UpsellProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsellProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsellProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
