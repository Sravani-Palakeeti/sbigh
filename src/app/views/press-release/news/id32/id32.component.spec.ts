import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id32Component } from './id32.component';

describe('Id32Component', () => {
  let component: Id32Component;
  let fixture: ComponentFixture<Id32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id32Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
