import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id26Component } from './id26.component';

describe('Id26Component', () => {
  let component: Id26Component;
  let fixture: ComponentFixture<Id26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id26Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
