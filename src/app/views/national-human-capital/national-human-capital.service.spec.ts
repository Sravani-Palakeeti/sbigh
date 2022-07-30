import { TestBed } from '@angular/core/testing';

import { NationalHumanCapitalService } from './national-human-capital.service';

describe('NationalHumanCapitalService', () => {
  let service: NationalHumanCapitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationalHumanCapitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
