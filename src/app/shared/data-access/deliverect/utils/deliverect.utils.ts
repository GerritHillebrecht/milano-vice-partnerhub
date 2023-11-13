import { DeliverectOrderQueryOptions } from '../deliverect.service';
import {
  DeliverectFetchOptions,
  defaultFetchOptions,
} from './deliverect.defaults';

export const getRequestOptions = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  };
};

interface RequestParamsInput {
  queryOptions: DeliverectOrderQueryOptions;
  DELIVERECT_API_URI: string;
}

export const couries: { [x: string]: number } = {
  Lieferando: 103,
  Wolt: 16,
  UberEats: 7,
};

export const getRequestParams = ({
  DELIVERECT_API_URI,
  queryOptions,
}: RequestParamsInput) => {
  const { couriers } = {
    ...defaultFetchOptions,
    ...queryOptions,
  } as DeliverectFetchOptions;

  const params = `{%22channel%22:{%22$in%22:[${couriers}]},%22account%22:{%22$in%22:[%2261605a08fd8070d72f202e21%22]},%22pickupTime%22:{%22$gt%22:%22${queryOptions.startDate}%22,%22$lt%22:%22${queryOptions.endDate}%22}}`;

  return `${DELIVERECT_API_URI}/orders?limit=100&offset=0&sort=created_at&sort_direction=desc`;
};
