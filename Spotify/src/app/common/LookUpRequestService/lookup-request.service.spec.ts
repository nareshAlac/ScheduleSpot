import { TestBed } from '@angular/core/testing';

import { LookupRequestService } from './lookup-request.service';

describe('LookupRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LookupRequestService = TestBed.get(LookupRequestService);
    expect(service).toBeTruthy();
  });
});
