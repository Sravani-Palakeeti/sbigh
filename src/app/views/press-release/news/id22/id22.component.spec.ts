import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id22Component } from './id22.component';

describe('Id22Component', () => {
  let component: Id22Component;
  let fixture: ComponentFixture<Id22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
