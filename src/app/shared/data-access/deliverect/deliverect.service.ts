import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DeliverectOrdersResponse } from './model/deliverect.orders.model';
import { getRequestOptions, getRequestParams } from './utils/deliverect.utils';
import { DeliverectTokenService } from './token/deliverect-token.service';

export const DELIVERECT_API_URI = 'https://api.deliverect.com';

interface OrderQueryOptions {
  startDate: Date;
  endDate: Date;
}

export type DeliverectOrderQueryOptions = Partial<OrderQueryOptions>;
@Injectable({
  providedIn: 'root',
})
export class DeliverectService {
  private readonly http = inject(HttpClient);
  private readonly refreshToken = inject(DeliverectTokenService).refreshToken;

  getDeliverectOrders(queryOptions: Partial<OrderQueryOptions>) {
    return this.http
      .get<DeliverectOrdersResponse>(
        getRequestParams({ DELIVERECT_API_URI, queryOptions }),
        getRequestOptions(this.refreshToken() as string)
      )
      .pipe(
        map((response) => response._items),
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      );
  }
}
