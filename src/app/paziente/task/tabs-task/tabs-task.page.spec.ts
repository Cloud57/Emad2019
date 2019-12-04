import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTaskPage } from './tabs-task.page';

describe('TabsTaskPage', () => {
  let component: TabsTaskPage;
  let fixture: ComponentFixture<TabsTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
