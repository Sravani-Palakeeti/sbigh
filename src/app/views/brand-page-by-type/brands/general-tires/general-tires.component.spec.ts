import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTiresComponent } from './general-tires.component';

describe('GeneralTiresComponent', () => {
  let component: GeneralTiresComponent;
  let fixture: ComponentFixture<GeneralTiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralTiresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralTiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
