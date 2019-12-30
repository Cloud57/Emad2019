import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoricoPage } from './storico.page';

describe('StoricoPage', () => {
  let component: StoricoPage;
  let fixture: ComponentFixture<StoricoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoricoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
