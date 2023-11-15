import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartSimple,
  faReceipt,
  faTableList,
} from '@fortawesome/free-solid-svg-icons';
import { DeliverectService } from '@shared/data-access/deliverect';
import { PlatformDetectionService } from '@shared/service/platform';
import { ProgressBoxesComponent } from '@shared/ui/progress';
import { TicketComponent } from '@shared/ui/ticket';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    FontAwesomeModule,
    TicketComponent,
    ProgressBoxesComponent,
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export default class InvoiceComponent implements OnInit {
  protected readonly tabIconInvoice = signal(faReceipt);
  protected readonly tabIconList = signal(faTableList);
  protected readonly tabIconAnalytics = signal(faChartSimple);

  private readonly platformDetectionService = inject(PlatformDetectionService);
  private readonly dataAccess = inject(DeliverectService);

  async ngOnInit(): Promise<void> {
    if (this.platformDetectionService.isPlatformBrowser) {
      const orders = await firstValueFrom(
        this.dataAccess.getDeliverectOrders({})
      );
      console.log('orders', orders);
    }
  }
}
