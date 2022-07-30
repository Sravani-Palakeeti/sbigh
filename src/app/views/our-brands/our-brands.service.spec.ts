import { TestBed } from '@angular/core/testing';

import { OurBrandsService } from './our-brands.service';

describe('OurBrandsService', () => {
  let service: OurBrandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurBrandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
