import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDeliverectTokenComponent } from './settings-deliverect-token.component';

describe('SettingsDeliverectTokenComponent', () => {
  let component: SettingsDeliverectTokenComponent;
  let fixture: ComponentFixture<SettingsDeliverectTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsDeliverectTokenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsDeliverectTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
