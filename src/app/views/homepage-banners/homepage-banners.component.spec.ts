import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBannersComponent } from './homepage-banners.component';

describe('HomepageBannersComponent', () => {
  let component: HomepageBannersComponent;
  let fixture: ComponentFixture<HomepageBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageBannersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
