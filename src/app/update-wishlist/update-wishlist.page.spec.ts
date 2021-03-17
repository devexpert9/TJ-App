import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWishlistPage } from './update-wishlist.page';

describe('UpdateWishlistPage', () => {
  let component: UpdateWishlistPage;
  let fixture: ComponentFixture<UpdateWishlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWishlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWishlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
