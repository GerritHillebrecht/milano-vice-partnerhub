import { Injectable, computed, inject } from '@angular/core';
import { OrdersService } from '../orders';

@Injectable({
  providedIn: 'root',
})
export class RevenueService {
  private readonly ordersService = inject(OrdersService);

  public readonly revenue = computed(async () => {
    const orders = await this.ordersService.orders();
    return orders.reduce((acc, order) => {
      return acc + order.payment.amount / 100;
    }, 0);
  });
}
