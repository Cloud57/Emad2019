import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTask3Page } from './tab-task3.page';

describe('TabTask3Page', () => {
  let component: TabTask3Page;
  let fixture: ComponentFixture<TabTask3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTask3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTask3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
