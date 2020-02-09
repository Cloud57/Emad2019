import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoricoEsecuzioneTaskPage } from './storico-esecuzione-task.page';

describe('StoricoEsecuzioneTaskPage', () => {
  let component: StoricoEsecuzioneTaskPage;
  let fixture: ComponentFixture<StoricoEsecuzioneTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoricoEsecuzioneTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoricoEsecuzioneTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
