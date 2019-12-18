import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleanzaPage } from './alleanza.page';

describe('AlleanzaPage', () => {
  let component: AlleanzaPage;
  let fixture: ComponentFixture<AlleanzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlleanzaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleanzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
