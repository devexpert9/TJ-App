import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistListingPage } from './wishlist-listing.page';

describe('WishlistListingPage', () => {
  let component: WishlistListingPage;
  let fixture: ComponentFixture<WishlistListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
