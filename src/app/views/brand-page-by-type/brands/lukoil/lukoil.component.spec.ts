import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LukoilComponent } from './lukoil.component';

describe('LukoilComponent', () => {
  let component: LukoilComponent;
  let fixture: ComponentFixture<LukoilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LukoilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LukoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
