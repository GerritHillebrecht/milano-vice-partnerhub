import { Injectable, computed, inject, signal } from '@angular/core';
import { DateSelectionService } from '../date-selection';
import { DeliverectService } from '@shared/data-access/deliverect';
import { firstValueFrom } from 'rxjs';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private readonly dateSelection = inject(DateSelectionService);
  private readonly dataAcess = inject(DeliverectService);

  readonly loadingOrders = signal(false);

  readonly ordersDeliverect = computed(async () => {
    const { to, from } = this.dateSelection.selectedTimePeriod();

    const startDate = from.toISOString();
    const endDate = to.toISOString();

    return await firstValueFrom(
      this.dataAcess.getDeliverectOrders({
        startDate,
        endDate,
      })
    );
  });

  readonly orders = computed<Promise<Order[]>>(async () => {
    return (await this.ordersDeliverect()).map((order) => {
      const { payment } = order;

      return {
        payment,
      };
    });
  });
}
