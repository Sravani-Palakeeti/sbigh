import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanganComponent } from './changan.component';

describe('ChanganComponent', () => {
  let component: ChanganComponent;
  let fixture: ComponentFixture<ChanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChanganComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
