import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroAlleanzaPage } from './membro-alleanza.page';

describe('MembroAlleanzaPage', () => {
  let component: MembroAlleanzaPage;
  let fixture: ComponentFixture<MembroAlleanzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembroAlleanzaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembroAlleanzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
