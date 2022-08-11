import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id21Component } from './id21.component';

describe('Id21Component', () => {
  let component: Id21Component;
  let fixture: ComponentFixture<Id21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
