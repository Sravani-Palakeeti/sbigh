import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutofinanceComponent } from './autofinance.component';

describe('AutofinanceComponent', () => {
  let component: AutofinanceComponent;
  let fixture: ComponentFixture<AutofinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutofinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutofinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
