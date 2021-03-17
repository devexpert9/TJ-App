import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOnSiniyetuPage } from './sell-on-siniyetu.page';

describe('SellOnSiniyetuPage', () => {
  let component: SellOnSiniyetuPage;
  let fixture: ComponentFixture<SellOnSiniyetuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellOnSiniyetuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOnSiniyetuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
