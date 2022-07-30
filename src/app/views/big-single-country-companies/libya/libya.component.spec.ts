import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibyaComponent } from './libya.component';

describe('LibyaComponent', () => {
  let component: LibyaComponent;
  let fixture: ComponentFixture<LibyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
