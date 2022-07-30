import { TestBed } from '@angular/core/testing';

import { EmployeeEngagementSurveyService } from './employee-engagement-survey.service';

describe('EmployeeEngagementSurveyService', () => {
  let service: EmployeeEngagementSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeEngagementSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
