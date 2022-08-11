import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id39Component } from './id39.component';

describe('Id39Component', () => {
  let component: Id39Component;
  let fixture: ComponentFixture<Id39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id39Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
