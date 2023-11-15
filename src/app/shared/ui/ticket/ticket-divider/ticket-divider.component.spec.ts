import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDividerComponent } from './ticket-divider.component';

describe('TicketDividerComponent', () => {
  let component: TicketDividerComponent;
  let fixture: ComponentFixture<TicketDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
