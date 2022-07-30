import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalHumanCapitalComponent } from './national-human-capital.component';

describe('NationalHumanCapitalComponent', () => {
  let component: NationalHumanCapitalComponent;
  let fixture: ComponentFixture<NationalHumanCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalHumanCapitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalHumanCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
