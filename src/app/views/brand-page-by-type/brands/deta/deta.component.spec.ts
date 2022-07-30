import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaComponent } from './deta.component';

describe('DetaComponent', () => {
  let component: DetaComponent;
  let fixture: ComponentFixture<DetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
