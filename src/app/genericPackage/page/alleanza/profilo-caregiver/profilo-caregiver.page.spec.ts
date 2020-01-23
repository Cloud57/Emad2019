import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloCaregiverPage } from './profilo-caregiver.page';

describe('ProfiloCaregiverPage', () => {
  let component: ProfiloCaregiverPage;
  let fixture: ComponentFixture<ProfiloCaregiverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloCaregiverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiloCaregiverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
