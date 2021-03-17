import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAccountPage } from './your-account.page';

describe('YourAccountPage', () => {
  let component: YourAccountPage;
  let fixture: ComponentFixture<YourAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourAccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
