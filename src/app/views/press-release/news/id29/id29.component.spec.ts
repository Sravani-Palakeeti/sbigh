import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id29Component } from './id29.component';

describe('Id29Component', () => {
  let component: Id29Component;
  let fixture: ComponentFixture<Id29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
