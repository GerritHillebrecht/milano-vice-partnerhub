import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OrdersService } from '@shared/service/orders';
import { TicketDividerComponent } from './ticket-divider/ticket-divider.component';
import { RevenueService } from '@shared/service/revenue/revenue.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, TicketDividerComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
})
export class TicketComponent {
  private readonly orderService = inject(OrdersService);
  private readonly revenueService = inject(RevenueService);

  protected readonly orders = this.orderService.orders;
  protected readonly revenue = this.revenueService.revenue;
}
