import { TestBed } from '@angular/core/testing';

import { WorkingWithBigService } from './working-with-big.service';

describe('WorkingWithBigService', () => {
  let service: WorkingWithBigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingWithBigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
