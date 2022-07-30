import { TestBed } from '@angular/core/testing';

import { JobexService } from './jobex.service';

describe('JobexService', () => {
  let service: JobexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
