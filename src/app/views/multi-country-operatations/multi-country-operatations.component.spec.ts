import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCountryOperatationsComponent } from './multi-country-operatations.component';

describe('MultiCountryOperatationsComponent', () => {
  let component: MultiCountryOperatationsComponent;
  let fixture: ComponentFixture<MultiCountryOperatationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiCountryOperatationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiCountryOperatationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
