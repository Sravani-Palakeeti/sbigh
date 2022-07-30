import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaronComponent } from './amaron.component';

describe('AmaronComponent', () => {
  let component: AmaronComponent;
  let fixture: ComponentFixture<AmaronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmaronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmaronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
