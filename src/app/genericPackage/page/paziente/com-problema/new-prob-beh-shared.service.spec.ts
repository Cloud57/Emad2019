import { TestBed } from '@angular/core/testing';

import { NewProbBehSharedService } from './new-prob-beh-shared.service';

describe('NewProbBehSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewProbBehSharedService = TestBed.get(NewProbBehSharedService);
    expect(service).toBeTruthy();
  });
});
