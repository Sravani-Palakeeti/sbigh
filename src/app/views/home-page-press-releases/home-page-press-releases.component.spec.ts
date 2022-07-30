import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePressReleasesComponent } from './home-page-press-releases.component';

describe('HomePagePressReleasesComponent', () => {
  let component: HomePagePressReleasesComponent;
  let fixture: ComponentFixture<HomePagePressReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePagePressReleasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePagePressReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
