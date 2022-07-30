import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldTravelMarketComponent } from './world-travel-market.component';

describe('WorldTravelMarketComponent', () => {
  let component: WorldTravelMarketComponent;
  let fixture: ComponentFixture<WorldTravelMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldTravelMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldTravelMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
