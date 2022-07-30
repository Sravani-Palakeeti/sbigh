import { TestBed } from '@angular/core/testing';

import { EmployeeConnectService } from './employee-connect.service';

describe('EmployeeConnectService', () => {
  let service: EmployeeConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
