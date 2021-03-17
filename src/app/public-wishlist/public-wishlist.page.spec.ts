import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicWishlistPage } from './public-wishlist.page';

describe('PublicWishlistPage', () => {
  let component: PublicWishlistPage;
  let fixture: ComponentFixture<PublicWishlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicWishlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicWishlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
