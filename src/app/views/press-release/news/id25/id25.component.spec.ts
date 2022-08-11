import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id25Component } from './id25.component';

describe('Id25Component', () => {
  let component: Id25Component;
  let fixture: ComponentFixture<Id25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id25Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
