import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCausePage } from './tab-cause.page';

describe('TabCausePage', () => {
  let component: TabCausePage;
  let fixture: ComponentFixture<TabCausePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCausePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCausePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
