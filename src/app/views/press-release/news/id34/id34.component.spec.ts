import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id34Component } from './id34.component';

describe('Id34Component', () => {
  let component: Id34Component;
  let fixture: ComponentFixture<Id34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id34Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
