import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliComportamentoProblemaPage } from './dettagli-comportamento-problema.page';

describe('DettagliComportamentoProblemaPage', () => {
  let component: DettagliComportamentoProblemaPage;
  let fixture: ComponentFixture<DettagliComportamentoProblemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliComportamentoProblemaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliComportamentoProblemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
