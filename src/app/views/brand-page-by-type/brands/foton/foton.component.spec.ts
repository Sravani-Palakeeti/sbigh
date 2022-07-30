import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotonComponent } from './foton.component';

describe('FotonComponent', () => {
  let component: FotonComponent;
  let fixture: ComponentFixture<FotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
