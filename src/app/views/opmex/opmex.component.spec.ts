import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpmexComponent } from './opmex.component';

describe('OpmexComponent', () => {
  let component: OpmexComponent;
  let fixture: ComponentFixture<OpmexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpmexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpmexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
