import { TestBed } from '@angular/core/testing';

import { SharedFilterService } from './shared-filter.service';

describe('SharedFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedFilterService = TestBed.get(SharedFilterService);
    expect(service).toBeTruthy();
  });
});
