import { TestBed } from '@angular/core/testing';

import { JoboppertunitiesService } from './joboppertunities.service';

describe('JoboppertunitiesService', () => {
  let service: JoboppertunitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoboppertunitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
