import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEngagementSurveyComponent } from './employee-engagement-survey.component';

describe('EmployeeEngagementSurveyComponent', () => {
  let component: EmployeeEngagementSurveyComponent;
  let fixture: ComponentFixture<EmployeeEngagementSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEngagementSurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeEngagementSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
