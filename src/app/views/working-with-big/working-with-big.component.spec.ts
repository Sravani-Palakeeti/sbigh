import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithBigComponent } from './working-with-big.component';

describe('WorkingWithBigComponent', () => {
  let component: WorkingWithBigComponent;
  let fixture: ComponentFixture<WorkingWithBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingWithBigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingWithBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
