import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComProblemaPage } from './com-problema.page';

describe('ComProblemaPage', () => {
  let component: ComProblemaPage;
  let fixture: ComponentFixture<ComProblemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComProblemaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComProblemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
