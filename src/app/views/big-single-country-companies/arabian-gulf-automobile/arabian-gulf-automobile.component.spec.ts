import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabianGulfAutomobileComponent } from './arabian-gulf-automobile.component';

describe('ArabianGulfAutomobileComponent', () => {
  let component: ArabianGulfAutomobileComponent;
  let fixture: ComponentFixture<ArabianGulfAutomobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArabianGulfAutomobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabianGulfAutomobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
