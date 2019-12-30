import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDettagliTaskPage } from './tabs-dettagli-task.page';

describe('TabsDettagliTaskPage', () => {
  let component: TabsDettagliTaskPage;
  let fixture: ComponentFixture<TabsDettagliTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsDettagliTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDettagliTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
