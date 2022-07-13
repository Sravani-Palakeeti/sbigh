import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCompaniesComponent } from './big-companies.component';

describe('BigCompaniesComponent', () => {
  let component: BigCompaniesComponent;
  let fixture: ComponentFixture<BigCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
