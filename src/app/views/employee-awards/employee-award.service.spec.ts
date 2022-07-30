import { TestBed } from '@angular/core/testing';

import { EmployeeAwardService } from './employee-award.service';

describe('EmployeeAwardService', () => {
  let service: EmployeeAwardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAwardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
