import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabReportPage } from './tab-report.page';

describe('TabReportPage', () => {
  let component: TabReportPage;
  let fixture: ComponentFixture<TabReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
