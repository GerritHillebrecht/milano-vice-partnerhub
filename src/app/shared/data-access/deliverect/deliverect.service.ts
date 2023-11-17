import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  DeliverectOrder,
  DeliverectOrdersResponse,
} from './model/deliverect.orders.model';
import { getRequestOptions, getRequestParams } from './utils/deliverect.utils';
import { DeliverectTokenService } from './token/deliverect-token.service';
import { DeliverectFetchOptions } from './utils/deliverect.defaults';
import { PlatformDetectionService } from '@shared/service/platform';

export const DELIVERECT_API_URI = 'https://api.deliverect.com';

@Injectable({
  providedIn: 'root',
})
export class DeliverectService {
  private readonly http = inject(HttpClient);
  private readonly refreshToken = inject(DeliverectTokenService).refreshToken;
  private readonly platformDetectionService = inject(PlatformDetectionService);

  getDeliverectOrders(requestOptions?: Partial<DeliverectFetchOptions>) {
    if (this.platformDetectionService.isPlatformBrowser) {
      const queryOptions = requestOptions || {};
      return this.http
        .get<DeliverectOrdersResponse>(
          getRequestParams({ DELIVERECT_API_URI, queryOptions }),
          getRequestOptions(this.refreshToken() as string)
        )
        .pipe(
          map((response) => response._items),
          catchError((error) => {
            console.error(error);
            return of([] as DeliverectOrder[]);
          })
        );
    }

    return of([] as DeliverectOrder[]);
  }
}
