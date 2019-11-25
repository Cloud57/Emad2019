import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCpPage } from './tab-cp.page';

describe('TabCpPage', () => {
  let component: TabCpPage;
  let fixture: ComponentFixture<TabCpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
