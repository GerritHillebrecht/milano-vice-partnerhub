import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubbarInvoiceComponent } from '../../../shared/ui/navigation/subbar/subbar-invoice/subbar-invoice.component';

@Component({
  selector: 'app-layout-invoice',
  standalone: true,
  imports: [CommonModule, RouterModule, SubbarInvoiceComponent],
  templateUrl: './layout-invoice.component.html',
  styleUrl: './layout-invoice.component.scss',
})
export default class LayoutInvoiceComponent {}
