import { DeliverectOrder } from '@shared/data-access/deliverect/model/deliverect.orders.model';

export interface Order {
  payment: DeliverectOrder['payment'];
}
