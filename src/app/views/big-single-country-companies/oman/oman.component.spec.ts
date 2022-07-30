import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmanComponent } from './oman.component';

describe('OmanComponent', () => {
  let component: OmanComponent;
  let fixture: ComponentFixture<OmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
