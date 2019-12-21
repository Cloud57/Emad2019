import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTaskPage } from './lista-task.page';

describe('ListaTaskPage', () => {
  let component: ListaTaskPage;
  let fixture: ComponentFixture<ListaTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
