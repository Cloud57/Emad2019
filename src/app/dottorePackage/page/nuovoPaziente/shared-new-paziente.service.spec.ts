import { TestBed } from '@angular/core/testing';

import { SharedNewPazienteService } from './shared-new-paziente.service';

describe('SharedNewPazienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedNewPazienteService = TestBed.get(SharedNewPazienteService);
    expect(service).toBeTruthy();
  });
});
