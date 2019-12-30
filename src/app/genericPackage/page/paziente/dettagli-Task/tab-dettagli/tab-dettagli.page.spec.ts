import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDettagliPage } from './tab-dettagli.page';

describe('TabDettagliPage', () => {
  let component: TabDettagliPage;
  let fixture: ComponentFixture<TabDettagliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDettagliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDettagliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
