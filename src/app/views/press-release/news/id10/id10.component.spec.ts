import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id10Component } from './id10.component';

describe('Id10Component', () => {
  let component: Id10Component;
  let fixture: ComponentFixture<Id10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
