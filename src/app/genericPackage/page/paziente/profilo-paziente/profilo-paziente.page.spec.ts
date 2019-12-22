import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloPazientePage } from './profilo-paziente.page';

describe('ProfiloPazientePage', () => {
  let component: ProfiloPazientePage;
  let fixture: ComponentFixture<ProfiloPazientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloPazientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiloPazientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
