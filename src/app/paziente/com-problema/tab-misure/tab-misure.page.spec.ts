import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMisurePage } from './tab-misure.page';

describe('TabMisurePage', () => {
  let component: TabMisurePage;
  let fixture: ComponentFixture<TabMisurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMisurePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMisurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
