import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbarInvoiceComponent } from './subbar-invoice.component';

describe('SubbarInvoiceComponent', () => {
  let component: SubbarInvoiceComponent;
  let fixture: ComponentFixture<SubbarInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubbarInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubbarInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
