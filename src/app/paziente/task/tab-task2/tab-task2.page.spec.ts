import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTask2Page } from './tab-task2.page';

describe('TabTask2Page', () => {
  let component: TabTask2Page;
  let fixture: ComponentFixture<TabTask2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTask2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTask2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
