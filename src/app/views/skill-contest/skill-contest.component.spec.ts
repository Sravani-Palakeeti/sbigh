import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillContestComponent } from './skill-contest.component';

describe('SkillContestComponent', () => {
  let component: SkillContestComponent;
  let fixture: ComponentFixture<SkillContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillContestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
