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
  queryOptions: Partial<DeliverectFetchOptions>;
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
  const {
    couriers: couriesMap,
    startDate,
    endDate,
    page,
    max_results,
  } = {
    ...defaultFetchOptions,
    ...queryOptions,
  } as DeliverectFetchOptions;

  const couriers = couriesMap.map((courier) => {
    return couries[courier];
  });

  const params = `{%22channel%22:{%22$in%22:[${couriers}]},%22account%22:{%22$in%22:[%2261605a08fd8070d72f202e21%22]},%22pickupTime%22:{%22$gt%22:%22${startDate}%22,%22$lt%22:%22${endDate}%22}}`;
  const path = `https://api.deliverect.com/orders?page=${page}&cursor=new&where=${params}&max_results=${max_results}&useFastCount=true`;

  return path;
  // return `${DELIVERECT_API_URI}/orders/${params}`;
};
