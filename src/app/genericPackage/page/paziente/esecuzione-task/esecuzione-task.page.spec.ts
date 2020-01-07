import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsecuzioneTaskPage } from './esecuzione-task.page';

describe('EsecuzioneTaskPage', () => {
  let component: EsecuzioneTaskPage;
  let fixture: ComponentFixture<EsecuzioneTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsecuzioneTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsecuzioneTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
