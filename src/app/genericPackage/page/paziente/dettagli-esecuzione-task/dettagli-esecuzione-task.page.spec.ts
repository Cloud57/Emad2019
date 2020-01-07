import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliEsecuzioneTaskPage } from './dettagli-esecuzione-task.page';

describe('DettagliEsecuzioneTaskPage', () => {
  let component: DettagliEsecuzioneTaskPage;
  let fixture: ComponentFixture<DettagliEsecuzioneTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliEsecuzioneTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliEsecuzioneTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
