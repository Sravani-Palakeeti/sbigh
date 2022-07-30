import { TestBed } from '@angular/core/testing';

import { SkillContestService } from './skill-contest.service';

describe('SkillContestService', () => {
  let service: SkillContestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillContestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
