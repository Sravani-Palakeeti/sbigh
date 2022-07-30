import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id30Component } from './id30.component';

describe('Id30Component', () => {
  let component: Id30Component;
  let fixture: ComponentFixture<Id30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
