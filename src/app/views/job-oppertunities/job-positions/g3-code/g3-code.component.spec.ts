import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G3CodeComponent } from './g3-code.component';

describe('G3CodeComponent', () => {
  let component: G3CodeComponent;
  let fixture: ComponentFixture<G3CodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G3CodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(G3CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
