import { TestBed } from '@angular/core/testing';

import { BigCompaniesService } from './big-companies.service';

describe('BigCompaniesService', () => {
  let service: BigCompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigCompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
