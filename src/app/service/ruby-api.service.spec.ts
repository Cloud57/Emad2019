import { TestBed } from '@angular/core/testing';

import { RubyApiService } from './ruby-api.service';

describe('RubyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RubyApiService = TestBed.get(RubyApiService);
    expect(service).toBeTruthy();
  });
});
