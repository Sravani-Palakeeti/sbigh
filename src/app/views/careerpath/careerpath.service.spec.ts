import { TestBed } from '@angular/core/testing';

import { CareerpathService } from './careerpath.service';

describe('CareerpathService', () => {
  let service: CareerpathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerpathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
