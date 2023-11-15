import dayjs from 'dayjs';

export interface DeliverectFetchOptions {
  page: number;
  max_results: number;
  startDate: string;
  endDate: string;
  couriers: Courier[];
}

type Courier = 'Lieferando' | 'UberEats' | 'Wolt';

export const defaultFetchOptions: DeliverectFetchOptions = {
  page: 1,
  max_results: 500,
  startDate: dayjs().startOf('month').toISOString(),
  endDate: dayjs().endOf('month').toISOString(),
  couriers: ['Lieferando', 'UberEats', 'Wolt'],
};
