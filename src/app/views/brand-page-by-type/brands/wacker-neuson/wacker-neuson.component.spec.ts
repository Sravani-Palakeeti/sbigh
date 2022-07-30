import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WackerNeusonComponent } from './wacker-neuson.component';

describe('WackerNeusonComponent', () => {
  let component: WackerNeusonComponent;
  let fixture: ComponentFixture<WackerNeusonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WackerNeusonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WackerNeusonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
