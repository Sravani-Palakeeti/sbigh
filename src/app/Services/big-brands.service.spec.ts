import { TestBed } from '@angular/core/testing';

import { BigBrandsService } from './big-brands.service';

describe('BigBrandsService', () => {
  let service: BigBrandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigBrandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
