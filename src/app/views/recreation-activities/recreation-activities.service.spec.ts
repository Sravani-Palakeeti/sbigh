import { TestBed } from '@angular/core/testing';

import { RecreationActivitiesService } from './recreation-activities.service';

describe('RecreationActivitiesService', () => {
  let service: RecreationActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecreationActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
