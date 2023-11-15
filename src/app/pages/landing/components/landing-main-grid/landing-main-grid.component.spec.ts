import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMainGridComponent } from './landing-main-grid.component';

describe('LandingMainGridComponent', () => {
  let component: LandingMainGridComponent;
  let fixture: ComponentFixture<LandingMainGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingMainGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingMainGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
