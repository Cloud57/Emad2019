import { TestBed } from '@angular/core/testing';

import { SharedIconService } from './shared-icon.service';

describe('SharedIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedIconService = TestBed.get(SharedIconService);
    expect(service).toBeTruthy();
  });
});
