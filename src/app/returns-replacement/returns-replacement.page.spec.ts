import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsReplacementPage } from './returns-replacement.page';

describe('ReturnsReplacementPage', () => {
  let component: ReturnsReplacementPage;
  let fixture: ComponentFixture<ReturnsReplacementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsReplacementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsReplacementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
