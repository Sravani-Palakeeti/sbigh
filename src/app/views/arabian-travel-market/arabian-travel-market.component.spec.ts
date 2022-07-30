import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabianTravelMarketComponent } from './arabian-travel-market.component';

describe('ArabianTravelMarketComponent', () => {
  let component: ArabianTravelMarketComponent;
  let fixture: ComponentFixture<ArabianTravelMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArabianTravelMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabianTravelMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
