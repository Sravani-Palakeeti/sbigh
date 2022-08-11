import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id17Component } from './id17.component';

describe('Id17Component', () => {
  let component: Id17Component;
  let fixture: ComponentFixture<Id17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
