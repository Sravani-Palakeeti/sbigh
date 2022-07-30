import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id33Component } from './id33.component';

describe('Id33Component', () => {
  let component: Id33Component;
  let fixture: ComponentFixture<Id33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
