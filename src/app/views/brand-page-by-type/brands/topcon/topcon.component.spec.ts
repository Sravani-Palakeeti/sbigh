import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopconComponent } from './topcon.component';

describe('TopconComponent', () => {
  let component: TopconComponent;
  let fixture: ComponentFixture<TopconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
