import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGuidaPage } from './tab-guida.page';

describe('TabGuidaPage', () => {
  let component: TabGuidaPage;
  let fixture: ComponentFixture<TabGuidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGuidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGuidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
