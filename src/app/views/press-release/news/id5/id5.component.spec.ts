import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id5Component } from './id5.component';

describe('Id5Component', () => {
  let component: Id5Component;
  let fixture: ComponentFixture<Id5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
