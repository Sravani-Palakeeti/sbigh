import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcmForkliftComponent } from './tcm-forklift.component';

describe('TcmForkliftComponent', () => {
  let component: TcmForkliftComponent;
  let fixture: ComponentFixture<TcmForkliftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcmForkliftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcmForkliftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
