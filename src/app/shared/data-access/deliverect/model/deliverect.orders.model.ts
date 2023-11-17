/* eslint-disable @typescript-eslint/no-empty-interface */
export interface DeliverectOrdersResponse {
  _items: DeliverectOrder[];
  _links: Links2;
  _meta: Meta;
}

export interface DeliverectOrder {
  _id: string;
  account: string;
  _created: string;
  _updated: string;
  _etag: string;
  channelOrderId: string;
  channelOrderKey: string;
  channelOrderDisplayId: string;
  posId: string;
  posReceiptId: string;
  posLocationId: string;
  location: string;
  channelLink: string;
  status: number;
  statusHistory: StatusHistory[];
  reportingHistory: ReportingHistory[];
  packaging: Packaging;
  channelStatusHistory: ChannelStatusHistory[];
  by: string;
  orderType: number;
  channel: number;
  pos: number;
  rating: any[];
  pickupTime: string;
  deliveryTime: string;
  preparationTime: number;
  deliveryIsAsap: boolean;
  courier: Courier;
  customer: Customer;
  deliveryAddress: DeliveryAddress;
  orderIsAlreadyPaid: boolean;
  deliveryInfo: DeliveryInfo;
  taxes: any[];
  payment: Payment;
  payments: any[];
  note: string;
  items: Item2[];
  decimalDigits: number;
  numberOfCustomers: number;
  channelOrderRawId: string;
  channelOrderHistoryRawIds: any[];
  serviceCharge: number;
  deliveryCost: number;
  bagFee: number;
  tip: number;
  driverTip: number;
  discountTotal: number;
  discounts: any[];
  historyDriverUpdates: any[];
  courierUpdateHistory: CourierUpdateHistory[];
  deliveryJobIds: any[];
  deliverySystems: any[];
  failedDeliverySystems: any[];
  capacityUsages: any[];
  resolvedBy: string;
  brandId: string;
  timezone: string;
  date: number;
  fixedCost: number;
  ageCheck: boolean;
  _links: Links;
  pickupTimeETA?: string;
}

export interface StatusHistory {
  timeStamp: string;
  status: number;
  response: string;
  source: number;
}

export interface ReportingHistory {
  eventType: number;
  timestamp: string;
  properties: Properties;
}

export interface Properties {
  endpoint: string;
  httpStatus?: number;
  reportingEndpointType: number;
  orderStatus: number;
}

export interface Packaging {
  includeCutlery: boolean;
}

export interface ChannelStatusHistory {
  timeStamp: string;
  orderStatus: number;
  channelStatus: string;
  success: boolean;
  response: string;
  channelEvent: number;
  properties: Properties2;
}

export interface Properties2 {
  pickupTime?: string;
  deliveryTime?: string;
}

export interface Courier {
  deliveryBy: string;
}

export interface Customer {
  _id: string;
  hash: string;
  name: string;
  companyName: string;
  phoneNumber?: string;
  email: string;
  tin: string;
}

export interface DeliveryAddress {
  country: string;
  postalCode: string;
  city: string;
  street?: string;
  source: string;
  extraAddressInfo: string;
}

export interface DeliveryInfo {
  packageSize: string;
  transportType: string;
}

export interface Payment {
  amount: number;
  type: number;
  due: number;
  rebate: number;
}

export interface Item2 {
  _id: string;
  plu: string;
  name: string;
  sortOrder: number;
  price: number;
  quantity: number;
  productType: number;
  remark: string;
  isInternal: boolean;
  subItems: SubItem[];
  packaging: Packaging3;
  workstations: any[];
  productTags: number[];
  bottleDepositPrice?: number;
}

export interface SubItem {
  _id: string;
  plu: string;
  name: string;
  sortOrder: number;
  price: number;
  quantity: number;
  productType: number;
  isInternal: boolean;
  subItems: any[];
  packaging: Packaging2;
  workstations: any[];
  productTags: number[];
}

export interface Packaging2 {
  count: number;
  reusable: boolean;
  packedItems: number;
}

export interface Packaging3 {
  count: number;
  reusable: boolean;
  packedItems: number;
}

export interface CourierUpdateHistory {
  status: number;
  received: string;
  courier: Courier2;
  arrivalTime: string;
  deliveryTime?: string;
  source: number;
}

export interface Courier2 {}

export interface Links {
  self: Self;
}

export interface Self {
  title: string;
  href: string;
}

export interface Links2 {
  parent: Parent;
  self: Self2;
}

export interface Parent {
  title: string;
  href: string;
}

export interface Self2 {
  title: string;
  href: string;
}

export interface Meta {
  page: number;
  max_results: number;
  total: number;
  cursor: string;
}

export type DeliverectChannelResponse = ChannelResponseData[];

export interface ChannelResponseData {
  date: string;
  revenue: number;
  grossSales: number;
  fixedCost: number;
  adjustedRevenue: number;
  deliveryCost: number;
  discountTotal: number;
  serviceCharge: number;
  tip: number;
  driverTip: number;
  taxTotal: number;
  taxTotalComputed: number;
  taxRemitted: number;
  rebate: number;
  bagFee: number;
  channelDiscount: number;
  restaurantDiscount: number;
  channelDeliveryCost: number;
  restaurantDeliveryCost: number;
  count: number;
  byPaymentType_CARD: number;
  byPaymentType_CASH: number;
  byPaymentType_ON_DELIVERY: number;
  byPaymentType_ONLINE: number;
  byPaymentType_CREDITCARDATDOOR: number;
  byPaymentType_PINATDOOR: number;
  byPaymentType_VOUCHERATDOOR: number;
  byPaymentType_MEALVOUCHER: number;
  byPaymentType_BANCONTACT: number;
  byPaymentType_OTHER: number;
  byPaymentType_INVOICE: number;
  byDeliveryType_UNKNOWN: number;
  byDeliveryType_PICKUP: number;
  byDeliveryType_DELIVERY: number;
  byDeliveryType_EAT_IN: number;
  byDeliveryType_CURBSIDE: number;
  channel: number;
}

const asd = {
  _items: [
    {
      _id: '65454737fc57ceab0098a6e5',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T19:17:11.725000Z',
      _updated: '2023-11-05T19:18:00.005000Z',
      _etag: 'a9a2bdc049a8eabbb61660762b597efb39f6570a',
      channelOrderId: '1ff2e4ce-a321-47df-aed3-acb14e50ec90',
      channelOrderDisplayId: '0EC90',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0df9',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T19:17:12.770000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T19:17:12.799000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T19:17:14.752000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T19:17:15.598000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T19:17:33.029000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T19:17:40.988000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T19:30:10.588000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T20:03:27.161000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T19:17:15.154000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:17:15.846000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:17:16.189000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:17:33.270000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:17:41.266000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:18:19.662000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:20:20.401000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:22:19.378000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:23:22.863000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:24:03.990000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 85,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:30:11.114000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:30:22.922000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 87,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T20:03:27.722000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T19:17:14.591000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T19:34:08.000000Z',
          },
        },
      ],
      by: '',
      orderType: 2,
      channel: 7,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T19:34:08.000000Z',
      deliveryTime: '2023-11-03T19:34:08.000000Z',
      preparationTime: 20,
      deliveryIsAsap: true,
      courier: {
        firstName: 'Shenol',
        phoneNumber: 'Code:  Number: +49 163 2688089',
        deliveryBy: 'UberEats',
        status: 90,
      },
      customer: {
        _id: '65454738fc57ceab0098a6f2',
        hash: '',
        name: 'Lars K.',
        phoneNumber: '+4915735981285',
        phoneAccessCode: '399 37 719',
        email: '',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 111,
      payment: {
        amount: 1683,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: 'Contacts: +49 1573 5981285#399 37 719\nCustomer name: Lars K.',
      items: [
        {
          _id: '65454738fc57ceab0098a6f3',
          plu: 'P-PI-uUnj-8',
          name: 'Pizza Hello Piccante\ud83c\udf36 \ud83c\udf36 \ud83c\udf36 ',
          sortOrder: 0,
          price: 1290,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          discountReferenceId: 1,
          discountReferenceIds: [1],
          productTags: [127, 101, 112, 106],
          channelItemId: '60456ad8-8a80-40e2-b6ee-257b0fde26a1',
        },
        {
          _id: '65454738fc57ceab0098a6f4',
          plu: 'P-NE-jZga-2',
          name: 'Cheesy Dippers',
          sortOrder: 0,
          price: 650,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '65454738fc57ceab0098a6f5',
              plu: 'M-VE-xQ6B-2',
              name: 'Knoblauch Dip\ud83c\udf31',
              sortOrder: 0,
              price: 130,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [108],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [109, 106, 101, 127, 112],
          channelItemId: '33708009-019f-48e1-b715-1492e599db65',
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '65454738fc57ceab0098a6ee',
      channelOrderHistoryRawIds: [
        '65454737943fd60a4aaae84b',
        '65454738fc57ceab0098a6ee',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -387,
      discounts: [
        {
          type: 'item_flat_off',
          provider: 'restaurant',
          name: 'MENU_ITEM_DISCOUNT',
          channelDiscountCode: '',
          referenceId: 1,
          value: 387,
          amount: 387,
          amountRestaurant: 387,
          amountChannel: 0,
        },
        {
          type: 'free_delivery',
          provider: 'restaurant',
          name: 'FREEDELIVERY',
          channelDiscountCode: '',
          referenceId: 2,
          value: 100,
          amount: 399,
          amountRestaurant: 399,
          amountChannel: 0,
        },
      ],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T19:17:12.800000Z',
          courier: {},
          arrivalTime: '2023-11-03T19:34:08.000000Z',
          deliveryTime: '2023-11-03T19:34:08.000000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T19:18:17.906000Z',
          courier: {
            firstName: 'Shenol',
            lastName: '',
            phoneNumber: 'Code: 32021472 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:28:06.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T19:20:18.602000Z',
          courier: {
            firstName: 'Shenol',
            lastName: '',
            phoneNumber: 'Code: 32021472 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:28:49.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T19:22:18.140000Z',
          courier: {
            firstName: 'Shenol',
            lastName: '',
            phoneNumber: 'Code: 32021472 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:30:24.000000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T19:23:21.227000Z',
          courier: {
            firstName: 'Shenol',
            lastName: '',
            phoneNumber: 'Code: 32021472 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:23:22.391000Z',
          source: 2,
        },
        {
          status: 85,
          received: '2023-11-03T19:24:02.725000Z',
          courier: {
            firstName: 'Shenol',
            lastName: '',
            phoneNumber: 'Code: 32021472 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:24:03.517000Z',
          source: 2,
        },
        {
          status: 87,
          received: '2023-11-03T19:30:21.433000Z',
          courier: {
            firstName: 'Shenol',
            lastName: '',
            phoneNumber: 'Code: 32021472 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:30:03.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T20:03:25.871000Z',
          courier: {
            firstName: 'Shenol',
            lastName: '',
            phoneNumber: 'Code:  Number: +49 163 2688089',
            transportType: 'unknown',
          },
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T19:30:03.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/65454737fc57ceab0098a6e5',
        },
      },
    },
    {
      _id: '6545447136702b135a451593',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T19:05:21.645000Z',
      _updated: '2023-11-05T19:06:00.010000Z',
      _etag: '3e3c726c41906e1b8894321031a681d2e7a38f5d',
      channelOrderId: '5dfa461b-001c-47c2-a80a-7e326e05ef7f',
      channelOrderDisplayId: '5EF7F',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0df9',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T19:05:22.609000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T19:05:22.613000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T19:05:24.101000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T19:05:24.842000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T19:06:26.748000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T19:06:35.429000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T19:39:42.210000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T19:53:21.339000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T19:05:24.316000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:05:25.049000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:05:25.281000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:06:27.035000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:06:35.746000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:19:28.790000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:20:34.938000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:21:23.083000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:22:26.967000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:24:11.615000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:25:12.324000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:26:12.369000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:27:17.931000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:28:13.884000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:29:21.176000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 85,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:35:05.109000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 87,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:39:42.495000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:53:21.989000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T19:05:23.966000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T19:27:54.000000Z',
          },
        },
      ],
      by: '',
      orderType: 2,
      channel: 7,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T19:27:54.000000Z',
      deliveryTime: '2023-11-03T19:27:54.000000Z',
      preparationTime: 20,
      deliveryIsAsap: true,
      courier: {
        firstName: 'Wael',
        phoneNumber: 'Code:  Number: +49 176 43819210',
        deliveryBy: 'UberEats',
        status: 90,
      },
      customer: {
        _id: '6545447236702b135a4515a0',
        hash: '',
        name: 'Hannah B.',
        phoneNumber: '+4915735981285',
        phoneAccessCode: '966 03 774',
        email: '',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 170,
      payment: {
        amount: 2583,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: 'Contacts: +49 1573 5981285#966 03 774\nCustomer name: Hannah B.',
      items: [
        {
          _id: '6545447236702b135a4515a1',
          plu: 'P-PI-yDMq-5',
          name: 'Pizza Prosciutto Paradise',
          sortOrder: 0,
          price: 1250,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '6545447236702b135a4515a2',
              plu: 'M-GE-gSJE-43',
              name: 'gehackter Knoblauch',
              sortOrder: 0,
              price: 50,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
            {
              _id: '6545447236702b135a4515a3',
              plu: 'M-RO-Os2n-2',
              name: 'Rote Chilis',
              sortOrder: 0,
              price: 100,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
            {
              _id: '6545447236702b135a4515a4',
              plu: 'M-KN-6pSI-2',
              name: 'vegane Knoblauchsauce',
              sortOrder: 0,
              price: 100,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
            {
              _id: '6545447236702b135a4515a5',
              plu: 'M-PA-hZN1-55',
              name: 'Parmesan Flakes',
              sortOrder: 0,
              price: 150,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
            {
              _id: '6545447236702b135a4515a6',
              plu: 'M-RO-1V57-52',
              name: 'rote Zwiebelringe',
              sortOrder: 0,
              price: 100,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
          channelItemId: '16711f2a-f617-4c08-8ffc-8ce788407707',
        },
        {
          _id: '6545447236702b135a4515a7',
          plu: 'P-PI-y8Rz-6',
          name: 'Pizza Fantastic Funghi',
          sortOrder: 0,
          price: 1190,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          discountReferenceId: 1,
          discountReferenceIds: [1],
          productTags: [101, 112, 127, 106],
          channelItemId: 'f98a029e-2a2c-4d19-a2ec-bf70e57bf86d',
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '6545447136702b135a45159c',
      channelOrderHistoryRawIds: [
        '65454471943fd60a4aaaa407',
        '6545447136702b135a45159c',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -357,
      discounts: [
        {
          type: 'item_flat_off',
          provider: 'restaurant',
          name: 'MENU_ITEM_DISCOUNT',
          channelDiscountCode: '',
          referenceId: 1,
          value: 357,
          amount: 357,
          amountRestaurant: 357,
          amountChannel: 0,
        },
      ],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T19:05:22.614000Z',
          courier: {},
          arrivalTime: '2023-11-03T19:27:54.000000Z',
          deliveryTime: '2023-11-03T19:27:54.000000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T19:19:27.014000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code: 41315849 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:28:05.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T19:20:33.098000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code: 41315849 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:27:07.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T19:21:21.833000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code: 41315849 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:29:13.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T19:22:25.848000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code: 41315849 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:31:32.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T19:24:10.326000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code: 41315849 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:33:35.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T19:25:10.729000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code: 41315849 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:32:21.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T19:26:11.061000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code: 41315849 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:33:37.000000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T19:27:15.620000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code: 41315849 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:27:24.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T19:28:11.976000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code: 41315849 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:29:47.000000Z',
          source: 2,
        },
        {
          status: 85,
          received: '2023-11-03T19:29:19.896000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code: 41315849 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:29:20.813000Z',
          source: 2,
        },
        {
          status: 87,
          received: '2023-11-03T19:35:03.777000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code: 41315849 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T19:33:17.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T19:53:20.238000Z',
          courier: {
            firstName: 'Wael',
            lastName: '',
            phoneNumber: 'Code:  Number: +49 176 43819210',
            transportType: 'unknown',
          },
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T19:33:17.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/6545447136702b135a451593',
        },
      },
    },
    {
      _id: '654540082e27022c9ddbecf9',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T18:46:32.959000Z',
      _updated: '2023-11-05T18:47:00.005000Z',
      _etag: 'cd7d3eab1f29e319cbb9bcabf58af42caefbb07a',
      channelOrderId: '65453ff89a195603412afe3c',
      channelOrderDisplayId: '122',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e14',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T18:46:33.369000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T18:46:33.372000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T18:46:33.907000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T18:46:34.480000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:49:48.408000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:49:54.564000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T19:12:24.550000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T19:21:30.070000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T18:46:34.088000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:46:34.678000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:46:34.777000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:46:40.384000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:49:48.727000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:49:54.813000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:12:24.772000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:21:30.330000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T18:46:33.824000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T19:11:19.619000Z',
          },
        },
      ],
      orderType: 2,
      channel: 16,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T19:11:19.619000Z',
      deliveryTime: '2023-11-03T19:11:19.619000Z',
      preparationTime: 25,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'Wolt',
        status: 90,
      },
      customer: {
        _id: '654540092e27022c9ddbed03',
        hash: '',
        name: 'Arun R',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 166,
      payment: {
        amount: 2540,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '',
      items: [
        {
          _id: '654540092e27022c9ddbed04',
          plu: 'P-PI-bM2I-9',
          name: 'Pizza Salfuto',
          sortOrder: 0,
          price: 1450,
          quantity: 1,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [127, 101, 112, 106],
        },
        {
          _id: '654540092e27022c9ddbed05',
          plu: 'P-PI-00uG-3',
          name: 'Pizza Margherita',
          sortOrder: 0,
          price: 1090,
          quantity: 1,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '654540092e27022c9ddbed01',
      channelOrderHistoryRawIds: [
        '654540082ca7ae58347fb1dd',
        '654540092e27022c9ddbed01',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: 0,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T18:46:33.372000Z',
          courier: {},
          arrivalTime: '2023-11-03T19:11:19.619000Z',
          deliveryTime: '2023-11-03T19:11:19.619000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T18:46:40.186000Z',
          courier: {},
          arrivalTime: '2023-11-03T19:11:19.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T19:21:30.045000Z',
          courier: {},
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T19:11:19.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/654540082e27022c9ddbecf9',
        },
      },
    },
    {
      _id: '65453ebe1cf08d7cb3169493',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T18:41:02.834000Z',
      _updated: '2023-11-05T18:42:00.010000Z',
      _etag: '7f7e6ab54bffbe81a9e0aefd2a6ffec57ff2ec26',
      channelOrderId: '65453eb5038654c41d9c2fea',
      channelOrderDisplayId: '120',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e14',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T18:41:03.258000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T18:41:03.261000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T18:41:03.815000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T18:41:04.305000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:42:36.385000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:42:42.894000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T19:06:34.376000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T19:14:10.012000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T18:41:04.218000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:41:04.516000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:41:04.850000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:41:10.542000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:42:36.662000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:42:43.107000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:06:34.637000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:14:10.313000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T18:41:03.742000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T19:05:55.769000Z',
          },
        },
      ],
      orderType: 2,
      channel: 16,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T19:05:55.769000Z',
      deliveryTime: '2023-11-03T19:05:55.769000Z',
      preparationTime: 25,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'Wolt',
        status: 90,
      },
      customer: {
        _id: '65453ebf1cf08d7cb316949d',
        hash: '',
        name: 'Marius M',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 335,
      payment: {
        amount: 5123,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '',
      items: [
        {
          _id: '65453ebf1cf08d7cb316949e',
          plu: 'P-PI-F7L7-2',
          name: 'Pinsa Artichoke Delight \ud83c\udf31',
          sortOrder: 0,
          price: 903,
          quantity: 1,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '65453ebf1cf08d7cb316949f',
              plu: 'M-GE-gSJE-43',
              name: 'gehackter Knoblauch',
              sortOrder: 0,
              price: 50,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112],
        },
        {
          _id: '65453ebf1cf08d7cb31694a0',
          plu: 'P-IN-erCl-2',
          name: 'Pinsa Inspo Italiano',
          sortOrder: 0,
          price: 1390,
          quantity: 3,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [127, 101, 112, 106],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '65453ebe1cf08d7cb316949b',
      channelOrderHistoryRawIds: [
        '65453ebe6baf65c1fba8ad99',
        '65453ebe1cf08d7cb316949b',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: 0,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T18:41:03.262000Z',
          courier: {},
          arrivalTime: '2023-11-03T19:05:55.769000Z',
          deliveryTime: '2023-11-03T19:05:55.769000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T18:41:10.345000Z',
          courier: {},
          arrivalTime: '2023-11-03T19:05:55.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T19:14:09.985000Z',
          courier: {},
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T19:05:55.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/65453ebe1cf08d7cb3169493',
        },
      },
    },
    {
      _id: '65453e5beae30ef9bf71af8a',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T18:39:23.761000Z',
      _updated: '2023-11-05T18:40:00.057000Z',
      _etag: '142a847ae9eb643dea50c627b9c54f0cddad6a23',
      channelOrderId: '5ff5cb45-0574-4243-8bea-34116e6b9846',
      channelOrderDisplayId: 'B9846',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0df9',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T18:39:24.514000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T18:39:24.516000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T18:39:25.950000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T18:39:26.788000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:40:07.858000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:40:14.117000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:58:54.733000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T19:16:13.952000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T18:39:26.183000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:39:26.980000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:39:27.122000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:40:08.096000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:40:14.389000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:46:05.558000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:47:31.847000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:48:27.030000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:49:15.576000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:50:11.453000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:52:04.056000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:53:17.088000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:54:08.295000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:55:46.879000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 85,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:58:55.033000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:01:15.093000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 87,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T19:16:15.001000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T18:39:25.875000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T18:53:48.000000Z',
          },
        },
      ],
      by: '',
      orderType: 2,
      channel: 7,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T18:53:48.000000Z',
      deliveryTime: '2023-11-03T18:53:48.000000Z',
      preparationTime: 20,
      deliveryIsAsap: true,
      courier: {
        firstName: 'Nicusor',
        phoneNumber: 'Code:  Number: +49 1575 8163980',
        deliveryBy: 'UberEats',
        status: 90,
      },
      customer: {
        _id: '65453e5ceae30ef9bf71af97',
        hash: '',
        name: 'Fred R.',
        phoneNumber: '+4915735981285',
        phoneAccessCode: '973 18 995',
        email: '',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 55,
      payment: {
        amount: 833,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: 'Contacts: +49 1573 5981285#973 18 995\nCustomer name: Fred R.',
      items: [
        {
          _id: '65453e5ceae30ef9bf71af98',
          plu: 'P-PI-0lqI-11',
          name: 'Pizza Very Veggy  ',
          sortOrder: 0,
          price: 1190,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          discountReferenceId: 1,
          discountReferenceIds: [1],
          productTags: [127, 112, 101, 106],
          channelItemId: '65c4c6b8-bfe7-49c3-83aa-607d0ddf7523',
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '65453e5beae30ef9bf71af93',
      channelOrderHistoryRawIds: [
        '65453e5b02771f7a838ecb50',
        '65453e5beae30ef9bf71af93',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -357,
      discounts: [
        {
          type: 'item_flat_off',
          provider: 'restaurant',
          name: 'MENU_ITEM_DISCOUNT',
          channelDiscountCode: '',
          referenceId: 1,
          value: 357,
          amount: 357,
          amountRestaurant: 357,
          amountChannel: 0,
        },
      ],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T18:39:24.517000Z',
          courier: {},
          arrivalTime: '2023-11-03T18:53:48.000000Z',
          deliveryTime: '2023-11-03T18:53:48.000000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T18:46:03.670000Z',
          courier: {
            firstName: 'Nicusor',
            lastName: '',
            phoneNumber: 'Code: 24620481 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:51:31.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T18:47:29.850000Z',
          courier: {
            firstName: 'Nicusor',
            lastName: '',
            phoneNumber: 'Code: 24620481 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:53:49.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T18:48:25.302000Z',
          courier: {
            firstName: 'Nicusor',
            lastName: '',
            phoneNumber: 'Code: 24620481 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:55:24.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T18:49:13.692000Z',
          courier: {
            firstName: 'Nicusor',
            lastName: '',
            phoneNumber: 'Code: 24620481 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:56:26.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T18:50:09.932000Z',
          courier: {
            firstName: 'Nicusor',
            lastName: '',
            phoneNumber: 'Code: 24620481 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:55:01.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T18:52:02.861000Z',
          courier: {
            firstName: 'Nicusor',
            lastName: '',
            phoneNumber: 'Code: 24620481 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:53:54.000000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T18:53:15.323000Z',
          courier: {
            firstName: 'Nicusor',
            lastName: '',
            phoneNumber: 'Code: 24620481 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:53:16.622000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T18:54:07.017000Z',
          courier: {
            firstName: 'Nicusor',
            lastName: '',
            phoneNumber: 'Code: 24620481 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:54:07.894000Z',
          source: 2,
        },
        {
          status: 85,
          received: '2023-11-03T18:55:44.896000Z',
          courier: {
            firstName: 'Nicusor',
            lastName: '',
            phoneNumber: 'Code: 24620481 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:55:46.392000Z',
          source: 2,
        },
        {
          status: 87,
          received: '2023-11-03T19:01:12.398000Z',
          courier: {
            firstName: 'Nicusor',
            lastName: '',
            phoneNumber: 'Code: 24620481 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:59:05.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T19:16:11.752000Z',
          courier: {
            firstName: 'Nicusor',
            lastName: '',
            phoneNumber: 'Code:  Number: +49 1575 8163980',
            transportType: 'unknown',
          },
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T18:59:05.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/65453e5beae30ef9bf71af8a',
        },
      },
    },
    {
      _id: '65453bbfd41b15355720c663',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T18:28:15.627000Z',
      _updated: '2023-11-05T18:29:00.020000Z',
      _etag: 'f5cad86e367b2ddbfb07534d4a3a59bea17aa5df',
      channelOrderId: 'a047fb97-1bd7-4f8e-a2da-6be965bab0ee',
      channelOrderKey: 'F4202AE1D60B787BA89D99303FBB2839',
      channelOrderDisplayId: '525RFE',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T18:28:15.710000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T18:28:15.714000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T18:28:16.089000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T18:28:16.731000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:28:34.330000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:28:42.053000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:44:06.024000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T18:28:16.421000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:28:17.182000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:28:17.279000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:28:34.699000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:28:42.316000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:44:06.245000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T18:28:15.948000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T18:44:06.366000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 2,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T18:43:13.000000Z',
      deliveryTime: '2023-11-03T18:54:16.000000Z',
      preparationTime: 15,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'takeaway',
      },
      customer: {
        _id: '65453bbfd41b15355720c66b',
        hash: '',
        name: 'Ann-Christine Larsen',
        companyName: '',
        phoneNumber: '+491726626966',
        email: '01726626966@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '22301',
        city: 'Hamburg',
        street: 'Maria-Louisen-Stra\u00dfe 104A',
        source: 'Maria-Louisen-Stra\u00dfe 104A, 22301, Hamburg, DE',
        extraAddressInfo: 'floor: 2',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 130,
      payment: {
        amount: 1972,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '\r\nDelivery is ASAP\n',
      items: [
        {
          _id: '65453bbfd41b15355720c66c',
          plu: 'P-PI-eHbN-4',
          name: 'Pizza Salami Sensation ',
          sortOrder: 0,
          price: 1290,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '65453bbfd41b15355720c66d',
              plu: 'M-KA-XP4l-50',
              name: 'Kapern',
              sortOrder: 0,
              price: 100,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
            {
              _id: '65453bbfd41b15355720c66e',
              plu: 'M-GE-DRpM-47',
              name: 'halbgetrocknete Kirschtomaten',
              sortOrder: 0,
              price: 100,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
        {
          _id: '65453bbfd41b15355720c66f',
          plu: 'P-VE-SEYt-32',
          name: 'Tr\u00fcffel Dip\ud83c\udf31',
          sortOrder: 0,
          price: 270,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [108],
        },
        {
          _id: '65453bbfd41b15355720c670',
          plu: 'P-SC-Ul1T-37',
          name: 'Schoko Explosion ',
          sortOrder: 0,
          price: 470,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [104, 127, 106, 101],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '65453bbfe398bfc99821af0e',
      channelOrderHistoryRawIds: ['65453bbfe398bfc99821af0e'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -258,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T18:28:15.714000Z',
          courier: {},
          arrivalTime: '2023-11-03T18:43:13.000000Z',
          deliveryTime: '2023-11-03T18:54:16.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/65453bbfd41b15355720c663',
        },
      },
    },
    {
      _id: '6545370c749045ed13d04efb',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T18:08:12.596000Z',
      _updated: '2023-11-05T18:09:00.004000Z',
      _etag: 'aa133e2e0ac57d6dc64586b454e5abe15ec3f0b2',
      channelOrderId: '0642fd1b-40d3-48f6-a068-e31f10f0db5c',
      channelOrderDisplayId: '0DB5C',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0df9',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T18:08:13.349000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T18:08:13.354000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T18:08:15.075000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T18:08:16.041000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:10:15.992000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:10:24.159000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:32:05.248000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T18:44:55.173000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T18:08:15.544000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:08:16.516000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:08:16.756000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:10:16.260000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:10:24.552000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:21:24.516000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:22:18.180000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:23:25.298000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:24:15.225000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:25:30.391000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 85,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:32:06.221000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:33:17.908000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 87,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:44:55.481000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T18:08:14.955000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T18:27:26.000000Z',
          },
        },
      ],
      by: '',
      orderType: 2,
      channel: 7,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T18:27:26.000000Z',
      deliveryTime: '2023-11-03T18:27:26.000000Z',
      preparationTime: 20,
      deliveryIsAsap: true,
      courier: {
        firstName: 'Gyursel',
        phoneNumber: 'Code:  Number: +49 177 7363275',
        deliveryBy: 'UberEats',
        status: 90,
      },
      customer: {
        _id: '6545370d749045ed13d04f08',
        hash: '',
        name: 'Anton W.',
        phoneNumber: '+4915735981285',
        phoneAccessCode: '094 65 927',
        email: '',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 239,
      payment: {
        amount: 3652,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: 'Customer notes: Please check order contents are correct.\nContacts: +49 1573 5981285#094 65 927\nCustomer name: Anton W.',
      items: [
        {
          _id: '6545370d749045ed13d04f09',
          plu: 'P-PI-0lqI-11',
          name: 'Pizza Very Veggy  ',
          sortOrder: 0,
          price: 1190,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          discountReferenceId: 1,
          discountReferenceIds: [1],
          productTags: [127, 112, 101, 106],
          channelItemId: '6e5c5377-e744-4d99-96b0-181cfa3dc5dc',
        },
        {
          _id: '6545370d749045ed13d04f0a',
          plu: 'P-PI-uUnj-8',
          name: 'Pizza Hello Piccante\ud83c\udf36 \ud83c\udf36 \ud83c\udf36 ',
          sortOrder: 0,
          price: 1290,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          discountReferenceId: 1,
          discountReferenceIds: [1],
          productTags: [127, 101, 112, 106],
          channelItemId: '6e309406-f7d5-4598-bf48-4430106576e6',
        },
        {
          _id: '6545370d749045ed13d04f0b',
          plu: 'P-VE-zyGk-31',
          name: 'Knoblauch Dip\ud83c\udf31',
          sortOrder: 0,
          price: 250,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [108],
          channelItemId: '7a5b0363-a839-40eb-afde-c55631c0cca4',
        },
        {
          _id: '6545370d749045ed13d04f0c',
          plu: 'P-PI-eHbN-4',
          name: 'Pizza Salami Sensation ',
          sortOrder: 0,
          price: 1190,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          discountReferenceId: 1,
          discountReferenceIds: [1],
          productTags: [101, 127, 112, 106],
          channelItemId: 'a830e0c2-1c70-4013-b603-ef48041c11c4',
        },
        {
          _id: '6545370d749045ed13d04f0d',
          plu: 'P-PI-y8Rz-6',
          name: 'Pizza Fantastic Funghi',
          sortOrder: 0,
          price: 1190,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          discountReferenceId: 1,
          discountReferenceIds: [1],
          productTags: [101, 112, 127, 106],
          channelItemId: '5692625d-5232-4a22-a513-8ac24034163a',
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '6545370c749045ed13d04f04',
      channelOrderHistoryRawIds: [
        '6545370ccf5675ee7ab5ffba',
        '6545370c749045ed13d04f04',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -1458,
      discounts: [
        {
          type: 'item_flat_off',
          provider: 'restaurant',
          name: 'MENU_ITEM_DISCOUNT',
          channelDiscountCode: '',
          referenceId: 1,
          value: 364,
          amount: 1458,
          amountRestaurant: 1458,
          amountChannel: 0,
        },
      ],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T18:08:13.355000Z',
          courier: {},
          arrivalTime: '2023-11-03T18:27:26.000000Z',
          deliveryTime: '2023-11-03T18:27:26.000000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T18:21:23.580000Z',
          courier: {
            firstName: 'Gyursel',
            lastName: '',
            phoneNumber: 'Code: 26829013 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:22:54.000000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T18:22:16.996000Z',
          courier: {
            firstName: 'Gyursel',
            lastName: '',
            phoneNumber: 'Code: 26829013 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:22:22.000000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T18:23:24.248000Z',
          courier: {
            firstName: 'Gyursel',
            lastName: '',
            phoneNumber: 'Code: 26829013 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:23:54.000000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T18:24:14.123000Z',
          courier: {
            firstName: 'Gyursel',
            lastName: '',
            phoneNumber: 'Code: 26829013 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:24:15.022000Z',
          source: 2,
        },
        {
          status: 85,
          received: '2023-11-03T18:25:27.892000Z',
          courier: {
            firstName: 'Gyursel',
            lastName: '',
            phoneNumber: 'Code: 26829013 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:25:29.696000Z',
          source: 2,
        },
        {
          status: 87,
          received: '2023-11-03T18:33:15.803000Z',
          courier: {
            firstName: 'Gyursel',
            lastName: '',
            phoneNumber: 'Code: 26829013 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T18:33:01.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T18:44:53.584000Z',
          courier: {
            firstName: 'Gyursel',
            lastName: '',
            phoneNumber: 'Code:  Number: +49 177 7363275',
            transportType: 'unknown',
          },
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T18:33:01.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/6545370c749045ed13d04efb',
        },
      },
    },
    {
      _id: '6545352782347310103421b2',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T18:00:07.051000Z',
      _updated: '2023-11-05T18:01:00.010000Z',
      _etag: '91902e662577b4cbbc4e6f11bf77785e97190e37',
      channelOrderId: '4bc18ef4-b6df-48ef-881f-f31b1f95cc7f',
      channelOrderKey: 'ADF5639F9F5562BB5FC39DE148F01523',
      channelOrderDisplayId: '96XNJM',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T18:00:07.148000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T18:00:07.150000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T18:00:07.454000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T18:00:08.145000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:02:39.893000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:02:51.882000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:21:59.180000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T18:00:07.691000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:00:08.427000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:00:08.497000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:02:40.145000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:02:52.196000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:21:59.406000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T18:00:07.369000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T18:21:59.471000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 2,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T18:15:04.000000Z',
      deliveryTime: '2023-11-03T18:29:52.000000Z',
      preparationTime: 15,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'takeaway',
      },
      customer: {
        _id: '6545352782347310103421ba',
        hash: '',
        name: 'Nele Dunker',
        companyName: '',
        phoneNumber: '+4915161132605',
        email: '4915161132605@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '20251',
        city: 'Hamburg',
        street: 'Geschwister-Scholl-Stra\u00dfe 156',
        source: 'Geschwister-Scholl-Stra\u00dfe 156, 20251, Hamburg, DE',
        extraAddressInfo: 'floor: 3',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 83,
      payment: {
        amount: 1282,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '\r\nDelivery is ASAP\n',
      items: [
        {
          _id: '6545352782347310103421bb',
          plu: 'P-PI-eHbN-4',
          name: 'Pizza Salami Sensation ',
          sortOrder: 0,
          price: 1290,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
        {
          _id: '6545352782347310103421bc',
          plu: 'P-VE-zyGk-31',
          name: 'Knoblauch Dip\ud83c\udf31',
          sortOrder: 0,
          price: 250,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [108],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '6545352726f210921e4f6a9d',
      channelOrderHistoryRawIds: ['6545352726f210921e4f6a9d'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -258,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T18:00:07.150000Z',
          courier: {},
          arrivalTime: '2023-11-03T18:15:04.000000Z',
          deliveryTime: '2023-11-03T18:29:52.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/6545352782347310103421b2',
        },
      },
    },
    {
      _id: '654534d3673c9c51fc71ab04',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T17:58:43.756000Z',
      _updated: '2023-11-05T17:59:00.008000Z',
      _etag: 'a0a2a9f5c7f623e401a1921701e6b5d1e082f230',
      channelOrderId: 'f4d2db88-de76-49ed-a6b4-2441a15090fd',
      channelOrderKey: '0B0F6195DA84B8252469CCE3A1303F4F',
      channelOrderDisplayId: 'MMGUFO',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T17:58:43.834000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T17:58:43.837000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T17:58:44.123000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T17:58:44.596000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:02:38.653000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:02:47.127000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:20:41.994000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T17:58:44.335000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:58:44.823000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:58:45.496000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:02:38.934000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:02:47.515000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:20:42.240000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T17:58:44.032000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T18:20:42.335000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 2,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T18:13:42.000000Z',
      deliveryTime: '2023-11-03T18:31:39.000000Z',
      preparationTime: 15,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'takeaway',
      },
      customer: {
        _id: '654534d3673c9c51fc71ab0c',
        hash: '',
        name: 'Felix Liebel',
        companyName: 'Wichels',
        phoneNumber: '+4917662477003',
        email: '4917662477003@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '20259',
        city: 'Hamburg',
        street: 'Eppendorfer Weg 69B',
        source: 'Eppendorfer Weg 69B, 20259, Hamburg, DE',
        extraAddressInfo: 'floor: 3. Stock',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 201,
      payment: {
        amount: 3072,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '. Anrufen wenn da.\r\nDelivery is ASAP\n',
      items: [
        {
          _id: '654534d3673c9c51fc71ab0d',
          plu: 'P-PI-00uG-3',
          name: 'Pizza Margherita',
          sortOrder: 0,
          price: 1090,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '654534d3673c9c51fc71ab0e',
              plu: 'M-GE-gSJE-43',
              name: 'gehackter Knoblauch',
              sortOrder: 0,
              price: 50,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
            {
              _id: '654534d3673c9c51fc71ab0f',
              plu: 'M-AN-FqDM-54',
              name: 'braune Champignons',
              sortOrder: 0,
              price: 150,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
            {
              _id: '654534d3673c9c51fc71ab10',
              plu: 'M-KS-2OSQ-56',
              name: 'K\u00e4se',
              sortOrder: 0,
              price: 150,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
            {
              _id: '654534d3673c9c51fc71ab11',
              plu: 'M-PA-TQAH-48',
              name: 'Paprikastreifen',
              sortOrder: 0,
              price: 100,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
        {
          _id: '654534d3673c9c51fc71ab12',
          plu: 'P-PI-eHbN-4',
          name: 'Pizza Salami Sensation ',
          sortOrder: 0,
          price: 1290,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
        {
          _id: '654534d3673c9c51fc71ab13',
          plu: 'P-VE-zyGk-31',
          name: 'Knoblauch Dip\ud83c\udf31',
          sortOrder: 0,
          price: 250,
          quantity: 2,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [108],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '654534d302771f7a838dc7f6',
      channelOrderHistoryRawIds: ['654534d302771f7a838dc7f6'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -258,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T17:58:43.837000Z',
          courier: {},
          arrivalTime: '2023-11-03T18:13:42.000000Z',
          deliveryTime: '2023-11-03T18:31:39.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/654534d3673c9c51fc71ab04',
        },
      },
    },
    {
      _id: '6545341c96371e437463075c',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T17:55:40.624000Z',
      _updated: '2023-11-05T17:56:00.003000Z',
      _etag: '8c6993786bf45ba1974ef1ee2ff0a1783da040e3',
      channelOrderId: '04e2cd3e-451f-4d68-bcfd-8648d9fbfa6c',
      channelOrderKey: 'FC1E24FB4D49249987DEA7A27C098912',
      channelOrderDisplayId: 'WIJ4SI',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T17:55:40.915000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T17:55:40.917000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T17:55:41.286000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T17:55:42.079000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:55:45.434000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:55:53.231000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:12:26.670000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T17:55:41.607000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:55:42.283000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:55:42.567000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:55:46.225000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:55:53.503000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:12:27.105000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T17:55:41.179000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T18:12:27.636000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 2,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T18:10:38.000000Z',
      deliveryTime: '2023-11-03T18:30:06.000000Z',
      preparationTime: 15,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'takeaway',
      },
      customer: {
        _id: '6545341c96371e4374630764',
        hash: '',
        name: 'Oliver Meyer',
        companyName: '',
        phoneNumber: '+4917614927364',
        email: '4917614927364@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '22529',
        city: 'Hamburg',
        street: 'Vogt-Wells-Stra\u00dfe 15c',
        source: 'Vogt-Wells-Stra\u00dfe 15c, 22529, Hamburg, DE',
        extraAddressInfo: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 219,
      payment: {
        amount: 3340,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '\r\nDelivery is ASAP\n',
      items: [
        {
          _id: '6545341c96371e4374630765',
          plu: 'P-PI-0lqI-11',
          name: 'Pizza Very Veggy  ',
          sortOrder: 0,
          price: 1250,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [127, 112, 101, 106],
        },
        {
          _id: '6545341c96371e4374630766',
          plu: 'P-PI-y8Rz-6',
          name: 'Pizza Fantastic Funghi',
          sortOrder: 0,
          price: 1250,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 112, 127, 106],
        },
        {
          _id: '6545341c96371e4374630767',
          plu: 'P-PI-00uG-3',
          name: 'Pizza Margherita',
          sortOrder: 0,
          price: 1090,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '6545341c02771f7a838db451',
      channelOrderHistoryRawIds: ['6545341c02771f7a838db451'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -250,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T17:55:40.917000Z',
          courier: {},
          arrivalTime: '2023-11-03T18:10:38.000000Z',
          deliveryTime: '2023-11-03T18:30:06.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/6545341c96371e437463075c',
        },
      },
    },
    {
      _id: '6545326471d69770a6ca645c',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T17:48:19.983000Z',
      _updated: '2023-11-05T17:49:00.007000Z',
      _etag: 'e40b970b3006dfe3ec45a8d7f1105739acc9c321',
      channelOrderId: '01139379-c902-42bc-981b-f9a45d20c1bb',
      channelOrderKey: 'FFF2AE2F348824D314D63532F4B1A678',
      channelOrderDisplayId: 'DFVWCN',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T17:48:20.103000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T17:48:20.105000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T17:48:20.451000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T17:48:21.104000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:48:25.912000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:48:34.101000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T18:06:12.446000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T17:48:20.668000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:48:21.340000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:48:21.510000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:48:26.221000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:48:34.556000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T18:06:12.910000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T17:48:20.358000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T18:06:13.148000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 2,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T18:03:17.000000Z',
      deliveryTime: '2023-11-03T18:19:40.000000Z',
      preparationTime: 15,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'takeaway',
      },
      customer: {
        _id: '6545326471d69770a6ca6464',
        hash: '',
        name: 'Antonia Hofmann',
        companyName: '',
        phoneNumber: '+4917657456227',
        email: '017657456227@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '22453',
        city: 'Hamburg',
        street: 'Am Langdiek 3',
        source: 'Am Langdiek 3, 22453, Hamburg, DE',
        extraAddressInfo: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 230,
      payment: {
        amount: 3520,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '\r\nDelivery is ASAP\n',
      items: [
        {
          _id: '6545326471d69770a6ca6465',
          plu: 'P-PI-tQBo-7',
          name: 'Pizza Hawaii Heaven',
          sortOrder: 0,
          price: 1350,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 112, 127, 106],
        },
        {
          _id: '6545326471d69770a6ca6466',
          plu: 'P-NE-Z5Fd-2',
          name: 'Pizza Mama Marinara \ud83c\udf36 \ud83c\udf31 ',
          sortOrder: 0,
          price: 970,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '6545326471d69770a6ca6467',
              plu: 'M-VE-RsT9-58',
              name: 'veganer Tunno',
              sortOrder: 0,
              price: 200,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 112, 109],
        },
        {
          _id: '6545326471d69770a6ca6468',
          plu: 'P-PI-y8Rz-6',
          name: 'Pizza Fantastic Funghi',
          sortOrder: 0,
          price: 1250,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 112, 127, 106],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '654532637fe3d622c0db74bb',
      channelOrderHistoryRawIds: ['654532637fe3d622c0db74bb'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -250,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T17:48:20.106000Z',
          courier: {},
          arrivalTime: '2023-11-03T18:03:17.000000Z',
          deliveryTime: '2023-11-03T18:19:40.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/6545326471d69770a6ca645c',
        },
      },
    },
    {
      _id: '65452c600b4ca4bceac9cf07',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T17:22:40.362000Z',
      _updated: '2023-11-05T17:23:00.005000Z',
      _etag: '01175fdf88c0728acc903b9140871e5eda0a18fc',
      channelOrderId: '97ad911f-9744-4275-96cb-1022054a6080',
      channelOrderKey: 'E7574AD1EB1F7B675621A414CE66E842',
      channelOrderDisplayId: 'M4GEC8',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T17:22:40.451000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T17:22:40.452000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T17:22:40.732000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T17:22:41.389000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:22:44.383000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:22:52.029000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:38:20.423000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T17:22:40.944000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:22:41.630000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:22:41.765000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:22:44.602000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:22:52.316000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:38:20.638000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T17:22:40.664000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T17:38:20.701000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 2,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T17:38:07.000000Z',
      deliveryTime: '2023-11-03T17:54:18.000000Z',
      preparationTime: 15,
      deliveryIsAsap: false,
      courier: {
        deliveryBy: 'takeaway',
      },
      customer: {
        _id: '65452c600b4ca4bceac9cf0f',
        hash: '',
        name: 'Marco M\u00f6ller',
        companyName: '',
        phoneNumber: '+491796020333',
        email: '01796020333@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '22335',
        city: 'Hamburg',
        street: 'Nesselstra\u00dfe 24',
        source: 'Nesselstra\u00dfe 24, 22335, Hamburg, DE',
        extraAddressInfo: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 145,
      payment: {
        amount: 2220,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '\r\n',
      items: [
        {
          _id: '65452c600b4ca4bceac9cf10',
          plu: 'P-PI-BUuU-15',
          name: 'Pizza Vulcano\ud83c\udf31',
          sortOrder: 0,
          price: 1250,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 112, 127, 117],
        },
        {
          _id: '65452c600b4ca4bceac9cf11',
          plu: 'P-NE-Z5Fd-2',
          name: 'Pizza Mama Marinara \ud83c\udf36 \ud83c\udf31 ',
          sortOrder: 0,
          price: 970,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 112, 109],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '65452c60125bf608f960239a',
      channelOrderHistoryRawIds: ['65452c60125bf608f960239a'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: 0,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T17:22:40.453000Z',
          courier: {},
          arrivalTime: '2023-11-03T17:38:07.000000Z',
          deliveryTime: '2023-11-03T17:54:18.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/65452c600b4ca4bceac9cf07',
        },
      },
    },
    {
      _id: '65452752f5d26fe9ebc2b57c',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T17:01:06.250000Z',
      _updated: '2023-11-05T17:02:00.009000Z',
      _etag: 'f5581af67845d557e89662cd611c690d4c45292e',
      channelOrderId: '654527421977537b012139a5',
      channelOrderDisplayId: '119',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e14',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T17:01:06.677000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T17:01:06.680000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T17:01:07.219000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T17:01:07.659000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:01:14.179000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:01:20.414000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:27:01.490000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T17:31:50.813000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T17:01:07.466000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:01:07.923000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:01:08.353000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:01:12.844000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:01:14.443000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:01:20.713000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:27:01.775000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:31:51.086000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T17:01:07.140000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T17:25:54.438000Z',
          },
        },
      ],
      orderType: 2,
      channel: 16,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T17:25:54.438000Z',
      deliveryTime: '2023-11-03T17:25:54.438000Z',
      preparationTime: 25,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'Wolt',
        status: 90,
      },
      customer: {
        _id: '65452752f5d26fe9ebc2b586',
        hash: '',
        name: 'Laurin W',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 268,
      payment: {
        amount: 4098,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '',
      items: [
        {
          _id: '65452752f5d26fe9ebc2b587',
          plu: 'P-PI-F7L7-2',
          name: 'Pinsa Artichoke Delight \ud83c\udf31',
          sortOrder: 0,
          price: 903,
          quantity: 1,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112],
        },
        {
          _id: '65452752f5d26fe9ebc2b588',
          plu: 'P-PI-86Pi-13',
          name: 'Pizza Tunno\ud83c\udf31',
          sortOrder: 0,
          price: 1015,
          quantity: 1,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112],
        },
        {
          _id: '65452752f5d26fe9ebc2b589',
          plu: 'P-PI-00uG-3',
          name: 'Pizza Margherita',
          sortOrder: 0,
          price: 1090,
          quantity: 2,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '65452752f5d26fe9ebc2b584',
      channelOrderHistoryRawIds: [
        '6545275226f210921e4de0aa',
        '65452752f5d26fe9ebc2b584',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: 0,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T17:01:06.680000Z',
          courier: {},
          arrivalTime: '2023-11-03T17:25:54.438000Z',
          deliveryTime: '2023-11-03T17:25:54.438000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T17:01:12.663000Z',
          courier: {},
          arrivalTime: '2023-11-03T17:25:54.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T17:31:50.796000Z',
          courier: {},
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T17:25:54.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/65452752f5d26fe9ebc2b57c',
        },
      },
    },
    {
      _id: '654528c6f279a5abd5aec326',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T17:07:18.208000Z',
      _updated: '2023-11-05T17:08:00.008000Z',
      _etag: 'e24952b6029feeeceee97f12e492297e2a422d74',
      channelOrderId: '200faba4-3ff3-455f-a38b-dfcdef496f5e',
      channelOrderKey: 'CE6E3BAC2AF5822E541AB65F9136D680',
      channelOrderDisplayId: 'Z4BELL',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T17:07:18.299000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T17:07:18.303000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T17:07:18.626000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T17:07:19.197000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:07:35.963000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:07:45.740000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T17:26:56.460000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T17:07:18.832000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:07:19.407000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:07:19.709000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:07:36.249000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:07:45.912000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:26:56.749000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T17:07:18.529000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T17:26:57.068000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 2,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T17:22:14.000000Z',
      deliveryTime: '2023-11-03T17:38:09.000000Z',
      preparationTime: 15,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'takeaway',
      },
      customer: {
        _id: '654528c6f279a5abd5aec32e',
        hash: '',
        name: 'Anna Rechner',
        companyName: '',
        phoneNumber: '+491626353102',
        email: '01626353102@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '22303',
        city: 'Hamburg',
        street: 'Forsmannstra\u00dfe 11',
        source: 'Forsmannstra\u00dfe 11, 22303, Hamburg, DE',
        extraAddressInfo: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 119,
      payment: {
        amount: 1800,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '\r\nDelivery is ASAP\n',
      items: [
        {
          _id: '654528c6f279a5abd5aec32f',
          plu: 'P-NE-jZga-2',
          name: 'Cheesy Dippers',
          sortOrder: 0,
          price: 650,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '654528c6f279a5abd5aec330',
              plu: 'M-VE-jciy-2',
              name: 'Tr\u00fcffel Dip\ud83c\udf31',
              sortOrder: 0,
              price: 150,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [108],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [109, 106, 101, 127, 112],
        },
        {
          _id: '654528c6f279a5abd5aec331',
          plu: 'P-PI-y8Rz-6',
          name: 'Pizza Fantastic Funghi',
          sortOrder: 0,
          price: 1250,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 112, 127, 106],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '654528c626f210921e4e0a28',
      channelOrderHistoryRawIds: ['654528c626f210921e4e0a28'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -250,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T17:07:18.303000Z',
          courier: {},
          arrivalTime: '2023-11-03T17:22:14.000000Z',
          deliveryTime: '2023-11-03T17:38:09.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/654528c6f279a5abd5aec326',
        },
      },
    },
    {
      _id: '654522ab83c8f4bf67db3f12',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T16:41:14.908000Z',
      _updated: '2023-11-05T16:42:00.005000Z',
      _etag: 'af2e3daad2fae23301f19731e05f6a92a43ec80d',
      channelOrderId: 'e38cd289-72cf-4d48-94f3-673e8014f663',
      channelOrderDisplayId: '4F663',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0df9',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T16:41:15.749000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T16:41:15.753000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T16:41:17.255000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T16:41:17.970000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:41:25.822000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:41:33.209000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:58:50.248000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T17:12:14.763000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T16:41:17.682000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:41:18.326000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:41:18.356000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:41:26.097000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:41:33.430000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:53:07.843000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:55:07.171000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:57:09.118000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 85,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:58:50.448000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:03:20.529000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 87,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T17:12:15.410000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T16:41:17.155000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T16:55:51.000000Z',
          },
        },
      ],
      by: '',
      orderType: 2,
      channel: 7,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T16:55:51.000000Z',
      deliveryTime: '2023-11-03T16:55:51.000000Z',
      preparationTime: 20,
      deliveryIsAsap: true,
      courier: {
        firstName: 'Penka',
        phoneNumber: 'Code:  Number: +49 163 0012658',
        deliveryBy: 'UberEats',
        status: 90,
      },
      customer: {
        _id: '654522ab83c8f4bf67db3f1f',
        hash: '',
        name: 'Tobias K.',
        phoneNumber: '+4915735981285',
        phoneAccessCode: '929 50 380',
        email: '',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 94,
      payment: {
        amount: 1423,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: 'Contacts: +49 1573 5981285#929 50 380\nCustomer name: Tobias K.',
      items: [
        {
          _id: '654522ab83c8f4bf67db3f20',
          plu: 'P-BR-5ETa-35',
          name: 'Classic Dippers',
          sortOrder: 0,
          price: 590,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '654522ab83c8f4bf67db3f21',
              plu: 'M-VE-eU6B-77',
              name: 'Knoblauch Dip\ud83c\udf31',
              sortOrder: 0,
              price: 0,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [112, 127],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112],
          channelItemId: '6aa2a8c5-f91f-40f0-a7c4-de11916bfe81',
        },
        {
          _id: '654522ab83c8f4bf67db3f22',
          plu: 'P-PI-y8Rz-6',
          name: 'Pizza Fantastic Funghi',
          sortOrder: 0,
          price: 1190,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          discountReferenceId: 1,
          discountReferenceIds: [1],
          productTags: [101, 112, 127, 106],
          channelItemId: 'd02c80bf-d824-4b7d-9b24-f87d3dfc6b5b',
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '654522ab83c8f4bf67db3f1b',
      channelOrderHistoryRawIds: [
        '654522aa7fe3d622c0d9c2f5',
        '654522ab83c8f4bf67db3f1b',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -357,
      discounts: [
        {
          type: 'item_flat_off',
          provider: 'restaurant',
          name: 'MENU_ITEM_DISCOUNT',
          channelDiscountCode: '',
          referenceId: 1,
          value: 357,
          amount: 357,
          amountRestaurant: 357,
          amountChannel: 0,
        },
      ],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T16:41:15.754000Z',
          courier: {},
          arrivalTime: '2023-11-03T16:55:51.000000Z',
          deliveryTime: '2023-11-03T16:55:51.000000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T16:53:06.148000Z',
          courier: {
            firstName: 'Penka',
            lastName: '',
            phoneNumber: 'Code: 07620984 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T16:56:30.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T16:55:06.156000Z',
          courier: {
            firstName: 'Penka',
            lastName: '',
            phoneNumber: 'Code: 07620984 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T16:57:31.000000Z',
          source: 2,
        },
        {
          status: 85,
          received: '2023-11-03T16:57:06.867000Z',
          courier: {
            firstName: 'Penka',
            lastName: '',
            phoneNumber: 'Code: 07620984 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T16:57:08.879000Z',
          source: 2,
        },
        {
          status: 87,
          received: '2023-11-03T17:03:19.642000Z',
          courier: {
            firstName: 'Penka',
            lastName: '',
            phoneNumber: 'Code: 07620984 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T16:59:05.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T17:12:13.366000Z',
          courier: {
            firstName: 'Penka',
            lastName: '',
            phoneNumber: 'Code:  Number: +49 163 0012658',
            transportType: 'unknown',
          },
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T16:59:05.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/654522ab83c8f4bf67db3f12',
        },
      },
    },
    {
      _id: '65451b666907cd0ade451211',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T16:10:14.691000Z',
      _updated: '2023-11-05T16:11:00.045000Z',
      _etag: '9c6c0bd43215f4614d45592a6c023b07630e21ae',
      channelOrderId: '801a7f88-158e-465d-add2-9b3377ca5e8b',
      channelOrderKey: 'E999B0A6532210702DB89CA09CDD2210',
      channelOrderDisplayId: 'JAHY1L',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T16:10:14.768000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T16:10:14.770000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T16:10:15.065000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T16:10:15.578000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:10:43.181000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:10:49.988000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:32:49.151000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T16:10:15.292000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:10:15.944000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:10:16.803000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:10:43.411000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:10:50.210000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:32:49.359000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T16:10:14.981000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T16:32:49.483000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 1,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T16:30:00.000000Z',
      deliveryTime: '2023-11-03T16:30:00.000000Z',
      preparationTime: 15,
      deliveryIsAsap: false,
      courier: {
        deliveryBy: 'restaurant',
      },
      customer: {
        _id: '65451b666907cd0ade451219',
        hash: '',
        name: 'Janina Mu\u00dfbach',
        companyName: '',
        phoneNumber: '+4915756109088',
        email: '015756109088@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '',
        city: '',
        source: 'DE',
        extraAddressInfo: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 39,
      payment: {
        amount: 3130,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '\r\n',
      items: [
        {
          _id: '65451b666907cd0ade45121a',
          plu: 'P-BR-5ETa-35',
          name: 'Classic Dippers',
          sortOrder: 0,
          price: 590,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '65451b666907cd0ade45121b',
              plu: 'M-VE-d1WP-77',
              name: 'Tr\u00fcffel Dip\ud83c\udf31',
              sortOrder: 0,
              price: 150,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [108],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112],
        },
        {
          _id: '65451b666907cd0ade45121c',
          plu: 'P-NE-Z5Fd-2',
          name: 'Pizza Mama Marinara \ud83c\udf36 \ud83c\udf31 ',
          sortOrder: 0,
          price: 970,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 112, 109],
        },
        {
          _id: '65451b666907cd0ade45121d',
          plu: 'P-PI-F7L7-2',
          name: 'Pinsa Artichoke Delight \ud83c\udf31',
          sortOrder: 0,
          price: 1350,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '65451b666907cd0ade45121e',
              plu: 'M-TR-Wkjx-64',
              name: 'Tr\u00fcffel-\u00d6l',
              sortOrder: 0,
              price: 70,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '65451b66125bf608f95e72f8',
      channelOrderHistoryRawIds: ['65451b66125bf608f95e72f8'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: 0,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T16:10:14.770000Z',
          courier: {},
          arrivalTime: '2023-11-03T16:30:00.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/65451b666907cd0ade451211',
        },
      },
    },
    {
      _id: '65451ace3d766587639109a0',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T16:07:42.621000Z',
      _updated: '2023-11-05T16:08:00.006000Z',
      _etag: 'e70a148a4d76fec3ae1a9ec404efc18d0d3d0e68',
      channelOrderId: '0d6c097e-e14d-473c-9604-0dcb8374c2e1',
      channelOrderKey: '7D8976097843BA6FE85DCA775EC9FAED',
      channelOrderDisplayId: 'QZJLC8',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T16:07:42.703000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T16:07:42.705000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T16:07:43.020000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T16:07:43.455000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:07:48.413000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:07:55.966000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:32:38.903000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T16:07:43.767000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:07:44.180000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:07:44.242000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:07:48.618000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:07:56.202000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:32:39.098000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T16:07:42.938000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T16:32:39.206000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 2,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T16:22:41.000000Z',
      deliveryTime: '2023-11-03T16:40:20.000000Z',
      preparationTime: 15,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'takeaway',
      },
      customer: {
        _id: '65451ace3d766587639109a8',
        hash: '',
        name: 'Stange',
        companyName: '',
        phoneNumber: '+4915155052082',
        email: '4915155052082@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '20251',
        city: 'Hamburg',
        street: 'Kegelhofstra\u00dfe 24',
        source: 'Kegelhofstra\u00dfe 24, 20251, Hamburg, DE',
        extraAddressInfo: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 116,
      payment: {
        amount: 1772,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '\r\nDelivery is ASAP\n',
      items: [
        {
          _id: '65451ace3d766587639109a9',
          plu: 'P-PI-eHbN-4',
          name: 'Pizza Salami Sensation ',
          sortOrder: 0,
          price: 1290,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
        {
          _id: '65451ace3d766587639109aa',
          plu: 'P-BR-5ETa-35',
          name: 'Classic Dippers',
          sortOrder: 0,
          price: 590,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '65451ace3d766587639109ab',
              plu: 'M-VE-d1WP-77',
              name: 'Tr\u00fcffel Dip\ud83c\udf31',
              sortOrder: 0,
              price: 150,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [108],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '65451ace943fd60a4aa664f8',
      channelOrderHistoryRawIds: ['65451ace943fd60a4aa664f8'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -258,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T16:07:42.705000Z',
          courier: {},
          arrivalTime: '2023-11-03T16:22:41.000000Z',
          deliveryTime: '2023-11-03T16:40:20.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/65451ace3d766587639109a0',
        },
      },
    },
    {
      _id: '65451ad07d6e7cd9f23d8e0d',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T16:07:44.123000Z',
      _updated: '2023-11-05T16:08:00.006000Z',
      _etag: '8c8aa4e1516f9d791c3207352a51e53ce04ae62b',
      channelOrderId: 'd9f88eab-28d0-41eb-8b53-7dd61ff87124',
      channelOrderKey: 'FB2F2D8D813251361A8201D5B41841DA',
      channelOrderDisplayId: 'MY2SKS',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T16:07:44.226000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T16:07:44.229000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T16:07:44.520000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T16:07:44.978000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:07:50.598000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:08:00.573000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T16:32:43.837000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T16:07:44.776000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:07:45.204000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:07:46.066000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:07:50.791000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:08:00.893000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:32:44.216000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T16:07:44.445000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T16:32:44.450000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 2,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T16:22:41.000000Z',
      deliveryTime: '2023-11-03T16:29:26.000000Z',
      preparationTime: 15,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'takeaway',
      },
      customer: {
        _id: '65451ad07d6e7cd9f23d8e15',
        hash: '',
        name: 'Ewa Paluszkiewicz',
        companyName: '',
        phoneNumber: '+491757197959',
        email: '491757197959@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '20249',
        city: 'Hamburg',
        street: 'Kunhardtstra\u00dfe 2',
        source: 'Kunhardtstra\u00dfe 2, 20249, Hamburg, DE',
        extraAddressInfo: 'floor: 5',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 88,
      payment: {
        amount: 1350,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '\r\nDelivery is ASAP\n',
      items: [
        {
          _id: '65451ad07d6e7cd9f23d8e16',
          plu: 'P-PI-8R1u-14',
          name: 'Pizza Very Vegan Veggy\ud83c\udf31',
          sortOrder: 0,
          price: 1350,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '65451ad0cf5675ee7ab315e5',
      channelOrderHistoryRawIds: ['65451ad0cf5675ee7ab315e5'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: 0,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T16:07:44.229000Z',
          courier: {},
          arrivalTime: '2023-11-03T16:22:41.000000Z',
          deliveryTime: '2023-11-03T16:29:26.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/65451ad07d6e7cd9f23d8e0d',
        },
      },
    },
    {
      _id: '6545109658a910048a1698d3',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T15:24:06.858000Z',
      _updated: '2023-11-05T15:25:00.009000Z',
      _etag: 'd9649515888b2dcd01125abd7dc7dc4d69ba3d6a',
      channelOrderId: '291a88c7-7a73-43f4-b0a1-e44ab61749b2',
      channelOrderDisplayId: '749B2',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0df9',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T15:24:07.635000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T15:24:07.639000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T15:24:09.129000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T15:24:10.048000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T15:24:12.456000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T15:24:19.757000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T15:41:55.959000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T16:07:16.365000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T15:24:09.372000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:24:10.269000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:24:10.331000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:24:12.664000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:24:19.999000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:31:53.782000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:32:52.837000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:33:46.742000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:34:47.675000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:35:50.807000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:36:53.946000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:37:59.745000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:39:05.092000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:40:01.128000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 84,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:40:46.607000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 85,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:41:56.350000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T15:46:18.358000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 87,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T16:07:16.760000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T15:24:09.018000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T15:37:14.000000Z',
          },
        },
      ],
      by: '',
      orderType: 2,
      channel: 7,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T15:37:14.000000Z',
      deliveryTime: '2023-11-03T15:37:14.000000Z',
      preparationTime: 20,
      deliveryIsAsap: true,
      courier: {
        firstName: 'Sepehr',
        phoneNumber: 'Code:  Number: +49 1575 8869927',
        deliveryBy: 'UberEats',
        status: 90,
      },
      customer: {
        _id: '6545109758a910048a1698e0',
        hash: '',
        name: 'Nils S.',
        phoneNumber: '+4915735981285',
        phoneAccessCode: '530 34 607',
        email: '',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 62,
      payment: {
        amount: 953,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: 'Contacts: +49 1573 5981285#530 34 607\nCustomer name: Nils S.',
      items: [
        {
          _id: '6545109758a910048a1698e1',
          plu: 'P-PI-uUnj-8',
          name: 'Pizza Hello Piccante\ud83c\udf36 \ud83c\udf36 \ud83c\udf36 ',
          sortOrder: 0,
          price: 1290,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '6545109758a910048a1698e2',
              plu: 'M-GE-gSJE-43',
              name: 'gehackter Knoblauch',
              sortOrder: 0,
              price: 50,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          discountReferenceId: 1,
          discountReferenceIds: [1],
          productTags: [127, 101, 112, 106],
          channelItemId: 'd72f4db1-0f4a-4942-8677-778377201d7e',
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '6545109658a910048a1698dc',
      channelOrderHistoryRawIds: [
        '654510962caa72ca3a3d6553',
        '6545109658a910048a1698dc',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -387,
      discounts: [
        {
          type: 'item_flat_off',
          provider: 'restaurant',
          name: 'MENU_ITEM_DISCOUNT',
          channelDiscountCode: '',
          referenceId: 1,
          value: 387,
          amount: 387,
          amountRestaurant: 387,
          amountChannel: 0,
        },
      ],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T15:24:07.640000Z',
          courier: {},
          arrivalTime: '2023-11-03T15:37:14.000000Z',
          deliveryTime: '2023-11-03T15:37:14.000000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T15:31:52.173000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code: 40376383 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T15:34:28.000000Z',
          source: 2,
        },
        {
          status: 83,
          received: '2023-11-03T15:32:51.626000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code: 40376383 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T15:36:28.000000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T15:33:45.705000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code: 40376383 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T15:33:46.489000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T15:34:46.504000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code: 40376383 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T15:35:45.000000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T15:35:49.503000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code: 40376383 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T15:36:31.000000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T15:36:52.287000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code: 40376383 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T15:36:53.473000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T15:37:58.867000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code: 40376383 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T15:37:59.546000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T15:39:04.124000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code: 40376383 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T15:39:04.851000Z',
          source: 2,
        },
        {
          status: 84,
          received: '2023-11-03T15:40:00.159000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code: 40376383 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T15:40:00.903000Z',
          source: 2,
        },
        {
          status: 85,
          received: '2023-11-03T15:40:45.669000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code: 40376383 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T15:40:46.357000Z',
          source: 2,
        },
        {
          status: 87,
          received: '2023-11-03T15:46:17.188000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code: 40376383 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T15:43:45.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T16:07:14.696000Z',
          courier: {
            firstName: 'Sepehr',
            lastName: '',
            phoneNumber: 'Code:  Number: +49 1575 8869927',
            transportType: 'unknown',
          },
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T15:43:45.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/6545109658a910048a1698d3',
        },
      },
    },
    {
      _id: '6544f48687191ace5619a40d',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T13:24:22.692000Z',
      _updated: '2023-11-05T13:24:59.991000Z',
      _etag: '8368e1c817947dd3b3a11db0d352a99847c91ec3',
      channelOrderId: '6544f46bf06200f1f7a0799e',
      channelOrderDisplayId: '118',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e14',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T13:24:23.060000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T13:24:23.062000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T13:24:23.898000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T13:24:24.554000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T13:25:40.212000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T13:25:46.405000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T13:58:14.883000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T14:09:35.482000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T13:24:24.139000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:24:24.863000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:24:24.993000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:24:29.596000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:25:40.421000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:25:46.613000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:58:15.161000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T14:09:35.731000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T13:24:23.823000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T13:48:57.489000Z',
          },
        },
      ],
      orderType: 2,
      channel: 16,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T13:48:57.489000Z',
      deliveryTime: '2023-11-03T13:48:57.489000Z',
      preparationTime: 25,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'Wolt',
        status: 90,
      },
      customer: {
        _id: '6544f48787191ace5619a417',
        hash: '',
        name: 'Tamara Giulia S',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 89,
      payment: {
        amount: 1360,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '',
      items: [
        {
          _id: '6544f48787191ace5619a418',
          plu: 'P-VE-SEYt-32',
          name: 'Tr\u00fcffel Dip\ud83c\udf31',
          sortOrder: 0,
          price: 270,
          quantity: 1,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [108],
        },
        {
          _id: '6544f48787191ace5619a419',
          plu: 'P-PI-00uG-3',
          name: 'Pizza Margherita',
          sortOrder: 0,
          price: 1090,
          quantity: 1,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '6544f48687191ace5619a415',
      channelOrderHistoryRawIds: [
        '6544f48602771f7a8388717d',
        '6544f48687191ace5619a415',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: 0,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T13:24:23.063000Z',
          courier: {},
          arrivalTime: '2023-11-03T13:48:57.489000Z',
          deliveryTime: '2023-11-03T13:48:57.489000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T13:24:29.419000Z',
          courier: {},
          arrivalTime: '2023-11-03T13:48:57.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T14:09:35.467000Z',
          courier: {},
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T13:48:57.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/6544f48687191ace5619a40d',
        },
      },
    },
    {
      _id: '6544f3a3991c504909450b12',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T13:20:35.229000Z',
      _updated: '2023-11-05T13:21:00.021000Z',
      _etag: 'ccbb9ac86e33c6f251e322429ff7e7f9dac5c3ab',
      channelOrderId: '8f6aae9c-f7e4-4a36-9f80-28a6c4056e24',
      channelOrderDisplayId: '56E24',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0df9',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T13:20:35.931000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T13:20:35.935000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T13:20:37.400000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T13:20:38.865000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T13:20:43.410000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T13:20:50.995000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T13:38:49.762000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T13:51:52.984000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T13:20:37.612000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:20:38.474000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:20:39.065000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:20:43.646000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:20:51.602000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:32:54.099000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 85,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:38:50.006000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:39:04.063000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 87,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T13:51:53.222000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T13:20:37.308000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T13:36:18.000000Z',
          },
        },
      ],
      by: '',
      orderType: 2,
      channel: 7,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T13:36:18.000000Z',
      deliveryTime: '2023-11-03T13:36:18.000000Z',
      preparationTime: 20,
      deliveryIsAsap: true,
      courier: {
        firstName: 'Hussein',
        phoneNumber: 'Code:  Number: +49 163 0070995',
        deliveryBy: 'UberEats',
        status: 90,
      },
      customer: {
        _id: '6544f3a3991c504909450b1f',
        hash: '',
        name: 'Aaron G.',
        phoneNumber: '+4915735981285',
        phoneAccessCode: '465 29 322',
        email: '',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 128,
      payment: {
        amount: 1966,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: 'Customer notes: Please check order contents are correct.\nContacts: +49 1573 5981285#465 29 322\nCustomer name: Aaron G.',
      items: [
        {
          _id: '6544f3a3991c504909450b20',
          plu: 'P-PI-0lqI-11',
          name: 'Pizza Very Veggy  ',
          sortOrder: 0,
          price: 1190,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          discountReferenceId: 1,
          discountReferenceIds: [1],
          productTags: [127, 112, 101, 106],
          channelItemId: '5167da51-d300-4618-a269-de55e6f5d2b2',
        },
        {
          _id: '6544f3a3991c504909450b21',
          plu: 'P-VE-zyGk-31',
          name: 'Knoblauch Dip\ud83c\udf31',
          sortOrder: 0,
          price: 250,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [108],
          channelItemId: 'a746d677-0a79-4b7e-a399-74ba9bcffaf7',
        },
        {
          _id: '6544f3a3991c504909450b22',
          plu: 'P-PI-eHbN-4',
          name: 'Pizza Salami Sensation ',
          sortOrder: 0,
          price: 1190,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '6544f3a3991c504909450b23',
              plu: 'M-GE-gSJE-43',
              name: 'gehackter Knoblauch',
              sortOrder: 0,
              price: 50,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          discountReferenceId: 1,
          discountReferenceIds: [1],
          productTags: [101, 127, 112, 106],
          channelItemId: '0812a846-3351-4f71-bb94-456d7d3c50e9',
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '6544f3a3991c504909450b1b',
      channelOrderHistoryRawIds: [
        '6544f3a3cf5675ee7ab06078',
        '6544f3a3991c504909450b1b',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -714,
      discounts: [
        {
          type: 'item_flat_off',
          provider: 'restaurant',
          name: 'MENU_ITEM_DISCOUNT',
          channelDiscountCode: '',
          referenceId: 1,
          value: 357,
          amount: 714,
          amountRestaurant: 714,
          amountChannel: 0,
        },
        {
          type: 'free_delivery',
          provider: 'restaurant',
          name: 'FREEDELIVERY',
          channelDiscountCode: '',
          referenceId: 2,
          value: 100,
          amount: 399,
          amountRestaurant: 399,
          amountChannel: 0,
        },
      ],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T13:20:35.935000Z',
          courier: {},
          arrivalTime: '2023-11-03T13:36:18.000000Z',
          deliveryTime: '2023-11-03T13:36:18.000000Z',
          source: 5,
        },
        {
          status: 85,
          received: '2023-11-03T13:32:53.191000Z',
          courier: {
            firstName: 'Hussein',
            lastName: '',
            phoneNumber: 'Code: 47656975 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T13:32:53.871000Z',
          source: 2,
        },
        {
          status: 87,
          received: '2023-11-03T13:39:02.549000Z',
          courier: {
            firstName: 'Hussein',
            lastName: '',
            phoneNumber: 'Code: 47656975 Number: +4915735981285',
            transportType: 'unknown',
          },
          arrivalTime: '2023-11-03T13:38:49.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T13:51:52.106000Z',
          courier: {
            firstName: 'Hussein',
            lastName: '',
            phoneNumber: 'Code:  Number: +49 163 0070995',
            transportType: 'unknown',
          },
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T13:38:49.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/6544f3a3991c504909450b12',
        },
      },
    },
    {
      _id: '6544e37116afe5ecc7993f40',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T12:11:29.481000Z',
      _updated: '2023-11-05T12:11:59.992000Z',
      _etag: 'd052606337b149942678e22a9c063e7b14f0b715',
      channelOrderId: '6544e3503ab4ef34a1072471',
      channelOrderDisplayId: '117',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e14',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T12:11:29.843000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T12:11:29.844000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T12:11:30.389000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T12:11:30.867000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T12:13:13.043000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T12:13:19.608000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T12:35:59.298000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T12:39:17.443000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T12:11:30.649000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:11:31.081000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:11:31.885000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:11:36.353000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:13:13.365000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:13:20.298000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:35:59.919000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:39:17.682000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T12:11:30.308000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T12:35:57.378000Z',
          },
        },
      ],
      orderType: 2,
      channel: 16,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T12:35:57.378000Z',
      deliveryTime: '2023-11-03T12:35:57.378000Z',
      preparationTime: 25,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'Wolt',
        status: 90,
      },
      customer: {
        _id: '6544e37116afe5ecc7993f4a',
        hash: '',
        name: 'Sarah B',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 105,
      payment: {
        amount: 1600,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '',
      items: [
        {
          _id: '6544e37116afe5ecc7993f4b',
          plu: 'P-PI-y8Rz-6',
          name: 'Pizza Fantastic Funghi',
          sortOrder: 0,
          price: 1250,
          quantity: 1,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '6544e37116afe5ecc7993f4c',
              plu: 'M-RO-1V57-52',
              name: 'rote Zwiebelringe',
              sortOrder: 0,
              price: 100,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 112, 127, 106],
        },
        {
          _id: '6544e37116afe5ecc7993f4d',
          plu: 'P-VE-zyGk-31',
          name: 'Knoblauch Dip\ud83c\udf31',
          sortOrder: 0,
          price: 250,
          quantity: 1,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [108],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '6544e37116afe5ecc7993f48',
      channelOrderHistoryRawIds: [
        '6544e3712caa72ca3a3a2d66',
        '6544e37116afe5ecc7993f48',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: 0,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T12:11:29.845000Z',
          courier: {},
          arrivalTime: '2023-11-03T12:35:57.378000Z',
          deliveryTime: '2023-11-03T12:35:57.378000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T12:11:35.994000Z',
          courier: {},
          arrivalTime: '2023-11-03T12:35:57.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T12:39:17.425000Z',
          courier: {},
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T12:35:57.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/6544e37116afe5ecc7993f40',
        },
      },
    },
    {
      _id: '6544e3e856185969b08e377d',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T12:13:28.803000Z',
      _updated: '2023-11-05T12:14:00.059000Z',
      _etag: '3991d5a8e34166fc632fc964367ae7f69e4baf5d',
      channelOrderId: 'cffd01c0-7ebe-45d4-ad7d-d57dd9dac107',
      channelOrderKey: '4F3B2D913734DF31C03B2E8EE96248F2',
      channelOrderDisplayId: 'UVQDZ9',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T12:13:28.916000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T12:13:28.919000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T12:13:29.233000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T12:13:29.755000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T12:13:38.935000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T12:13:45.119000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T12:29:46.279000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T12:13:29.489000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:13:30.006000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:13:30.539000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:13:39.292000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:13:45.347000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:29:46.540000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T12:13:29.146000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T12:29:46.559000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 2,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T12:28:26.000000Z',
      deliveryTime: '2023-11-03T12:39:48.000000Z',
      preparationTime: 15,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'takeaway',
      },
      customer: {
        _id: '6544e3e856185969b08e3785',
        hash: '',
        name: 'von Arnim Hans-Christian',
        companyName: '',
        phoneNumber: '+4915146154029',
        email: '4915146154029@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '20249',
        city: 'Hamburg',
        street: 'Heilwigstra\u00dfe 16',
        source: 'Heilwigstra\u00dfe 16, 20249, Hamburg, DE',
        extraAddressInfo: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 24,
      payment: {
        amount: 365,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '\r\nDelivery is ASAP\n',
      items: [
        {
          _id: '6544e3e856185969b08e3786',
          plu: 'P-PI-eHbN-4',
          name: 'Pizza Salami Sensation ',
          sortOrder: 0,
          price: 1290,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '6544e3e802771f7a83871087',
      channelOrderHistoryRawIds: ['6544e3e802771f7a83871087'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -925,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T12:13:28.919000Z',
          courier: {},
          arrivalTime: '2023-11-03T12:28:26.000000Z',
          deliveryTime: '2023-11-03T12:39:48.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/6544e3e856185969b08e377d',
        },
      },
    },
    {
      _id: '6544e1140fd7d9158ac9d342',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T12:01:24.365000Z',
      _updated: '2023-11-05T12:02:00.005000Z',
      _etag: '35c8cdfd6f19a682d436403c127bfc1be1fc415b',
      channelOrderId: '6544e0f1eb222da5b3929322',
      channelOrderDisplayId: '116',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e14',
      status: 90,
      statusHistory: [
        {
          timeStamp: '2023-11-03T12:01:24.776000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T12:01:24.780000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T12:01:25.428000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T12:01:26.093000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T12:01:28.008000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T12:01:34.899000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T12:25:29.694000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          status: 90,
          source: 2,
          timeStamp: '2023-11-03T12:44:43.141000Z',
          response: '',
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T12:01:25.744000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:01:26.455000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:01:26.790000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:01:28.271000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:01:31.027000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 83,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:01:35.157000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:25:29.952000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:44:43.494000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events/courier',
            httpStatus: 200,
            reportingEndpointType: 30,
            courierStatus: 90,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T12:01:25.283000Z',
          orderStatus: 1,
          channelStatus: '',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {
            pickupTime: '2023-11-03T12:25:52.456000Z',
          },
        },
      ],
      orderType: 2,
      channel: 16,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T12:25:52.456000Z',
      deliveryTime: '2023-11-03T12:25:52.456000Z',
      preparationTime: 25,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'Wolt',
        status: 90,
      },
      customer: {
        _id: '6544e1140fd7d9158ac9d34c',
        hash: '',
        name: 'Jenny C',
      },
      deliveryAddress: {
        source: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 359,
      payment: {
        amount: 5480,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '',
      items: [
        {
          _id: '6544e1140fd7d9158ac9d34d',
          plu: 'P-PI-00uG-3',
          name: 'Pizza Margherita',
          sortOrder: 0,
          price: 1090,
          quantity: 1,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
        {
          _id: '6544e1140fd7d9158ac9d34e',
          plu: 'P-PI-uUnj-8',
          name: 'Pizza Hello Piccante\ud83c\udf36 \ud83c\udf36 \ud83c\udf36 ',
          sortOrder: 0,
          price: 1350,
          quantity: 2,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '6544e1140fd7d9158ac9d34f',
              plu: 'M-GE-gSJE-43',
              name: 'gehackter Knoblauch',
              sortOrder: 0,
              price: 50,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
            {
              _id: '6544e1140fd7d9158ac9d350',
              plu: 'M-RO-Os2n-2',
              name: 'Rote Chilis',
              sortOrder: 0,
              price: 100,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [127, 101, 112, 106],
        },
        {
          _id: '6544e1140fd7d9158ac9d351',
          plu: 'P-PI-yDMq-5',
          name: 'Pizza Prosciutto Paradise',
          sortOrder: 0,
          price: 1290,
          quantity: 1,
          productType: 1,
          categoryInfo: {},
          isInternal: false,
          subItems: [
            {
              _id: '6544e1140fd7d9158ac9d352',
              plu: 'M-RO-1V57-52',
              name: 'rote Zwiebelringe',
              sortOrder: 0,
              price: 100,
              quantity: 1,
              productType: 2,
              categoryInfo: {},
              isInternal: false,
              subItems: [],
              packaging: {
                count: 1,
                reusable: false,
                packedItems: 0,
              },
              workstations: [],
              productTags: [],
            },
          ],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '6544e1140fd7d9158ac9d34a',
      channelOrderHistoryRawIds: [
        '6544e114943fd60a4aa21049',
        '6544e1140fd7d9158ac9d34a',
      ],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: 0,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T12:01:24.780000Z',
          courier: {},
          arrivalTime: '2023-11-03T12:25:52.456000Z',
          deliveryTime: '2023-11-03T12:25:52.456000Z',
          source: 5,
        },
        {
          status: 83,
          received: '2023-11-03T12:01:30.825000Z',
          courier: {},
          arrivalTime: '2023-11-03T12:25:52.000000Z',
          source: 2,
        },
        {
          status: 90,
          received: '2023-11-03T12:44:43.113000Z',
          courier: {},
          source: 2,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      tabletless: true,
      ageCheck: false,
      deliveryTimeETA: null,
      pickupTimeETA: '2023-11-03T12:25:52.000000Z',
      _links: {
        self: {
          title: 'order',
          href: 'orders/6544e1140fd7d9158ac9d342',
        },
      },
    },
    {
      _id: '6544dee4d25cb8081362934e',
      account: '61605a08fd8070d72f202e21',
      _created: '2023-11-03T11:52:04.477000Z',
      _updated: '2023-11-05T11:53:00.005000Z',
      _etag: '3f7f6c27cf464a88350f9df7a54331b79e2beeb1',
      channelOrderId: '77237544-8b18-450a-995c-f2a97dca3695',
      channelOrderKey: '091A9783D2471ECE545D6D1632ABFDCB',
      channelOrderDisplayId: 'DSFB1R',
      posId: '',
      posReceiptId: '',
      posLocationId: '',
      location: '63ce5aff7558637d082dfd52',
      channelLink: '63ce5b000658ac17d61c0e08',
      status: 60,
      statusHistory: [
        {
          timeStamp: '2023-11-03T11:52:04.607000Z',
          status: 4,
          response: '',
          source: 2,
        },
        {
          timeStamp: '2023-11-03T11:52:04.609000Z',
          status: 1,
          response: '',
          source: 5,
        },
        {
          status: 3,
          source: 5,
          timeStamp: '2023-11-03T11:52:04.907000Z',
          response: '',
        },
        {
          timeStamp: '2023-11-03T11:52:05.472000Z',
          status: 6,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T11:52:09.321000Z',
          status: 20,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T11:52:16.975000Z',
          status: 7,
          response:
            '{\n  "trigger": "auto-print",\n  "ticketType": "bag",\n  "deviceId": "ce5f6aec-6e8a-4756-a60c-84718af708f5",\n  "printer": ""\n}',
          source: 3,
        },
        {
          timeStamp: '2023-11-03T12:08:02.619000Z',
          status: 60,
          response: 'Device ID: ce5f6aec-6e8a-4756-a60c-84718af708f5',
          source: 3,
        },
      ],
      reportingHistory: [
        {
          eventType: 1,
          timestamp: '2023-11-03T11:52:05.212000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T11:52:05.715000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 6,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T11:52:06.032000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders',
            httpStatus: 200,
            reportingEndpointType: 10,
            orderStatus: 3,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T11:52:09.558000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 20,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T11:52:17.222000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 7,
          },
        },
        {
          eventType: 1,
          timestamp: '2023-11-03T12:08:02.956000Z',
          properties: {
            endpoint:
              'https://afi4wtjfe9.execute-api.eu-central-1.amazonaws.com/deliverect/orders/events',
            httpStatus: 200,
            reportingEndpointType: 20,
            orderStatus: 60,
          },
        },
      ],
      packaging: {
        includeCutlery: false,
      },
      channelStatusHistory: [
        {
          timeStamp: '2023-11-03T11:52:04.837000Z',
          orderStatus: 1,
          channelStatus: 'confirmed',
          success: true,
          response: '',
          channelEvent: 20,
          properties: {},
        },
        {
          timeStamp: '2023-11-03T12:08:03.709000Z',
          orderStatus: 60,
          channelStatus: 'in_delivery',
          success: true,
          response: '',
          channelEvent: 60,
          properties: {},
        },
      ],
      by: 'Lieferando.de',
      orderType: 2,
      channel: 103,
      pos: 20000,
      rating: [],
      pickupTime: '2023-11-03T12:07:02.000000Z',
      deliveryTime: '2023-11-03T12:13:38.000000Z',
      preparationTime: 15,
      deliveryIsAsap: true,
      courier: {
        deliveryBy: 'takeaway',
      },
      customer: {
        _id: '6544dee4d25cb80813629356',
        hash: '',
        name: 'Nick Kiens',
        companyName: '',
        phoneNumber: '+491742682470',
        email: '491742682470@deliverect.com',
        tin: '',
      },
      deliveryAddress: {
        country: 'DE',
        postalCode: '20249',
        city: 'Hamburg',
        street: 'Schrammsweg 13C',
        source: 'Schrammsweg 13C, 20249, Hamburg, DE',
        extraAddressInfo: '',
      },
      orderIsAlreadyPaid: true,
      deliveryInfo: {
        packageSize: 'unknown',
        transportType: 'unknown',
      },
      taxes: [],
      taxTotalComputed: 67,
      payment: {
        amount: 1032,
        type: 3,
        due: 0,
        rebate: 0,
      },
      payments: [],
      note: '\r\nDelivery is ASAP\n',
      items: [
        {
          _id: '6544dee4d25cb80813629357',
          plu: 'P-PI-eHbN-4',
          name: 'Pizza Salami Sensation ',
          sortOrder: 0,
          price: 1290,
          quantity: 1,
          productType: 1,
          remark: '',
          categoryInfo: {},
          isInternal: false,
          subItems: [],
          packaging: {
            count: 1,
            reusable: false,
            packedItems: 0,
          },
          workstations: [],
          productTags: [101, 127, 112, 106],
        },
      ],
      decimalDigits: 2,
      numberOfCustomers: 0,
      channelOrderRawId: '6544dee42caa72ca3a39c615',
      channelOrderHistoryRawIds: ['6544dee42caa72ca3a39c615'],
      serviceCharge: 0,
      deliveryCost: 0,
      bagFee: 0,
      tip: 0,
      driverTip: 0,
      discountTotal: -258,
      discounts: [],
      historyDriverUpdates: [],
      courierUpdateHistory: [
        {
          status: 81,
          received: '2023-11-03T11:52:04.609000Z',
          courier: {},
          arrivalTime: '2023-11-03T12:07:02.000000Z',
          deliveryTime: '2023-11-03T12:13:38.000000Z',
          source: 5,
        },
      ],
      deliveryJobIds: [],
      deliverySystems: [],
      failedDeliverySystems: [],
      capacityUsages: [],
      resolvedBy: '',
      brandId: '61605a08fd8070d72f202e20',
      timezone: 'Europe/Berlin',
      date: 20231103,
      fixedCost: 0,
      ageCheck: false,
      _links: {
        self: {
          title: 'order',
          href: 'orders/6544dee4d25cb8081362934e',
        },
      },
    },
  ],
  _links: {
    parent: {
      title: 'home',
      href: '/',
    },
    self: {
      title: 'orders',
      href: 'orders?where={"account":{"$in":["61605a08fd8070d72f202e21"]},"pickupTime":{"$gt":"2023-10-31T23:00:00.000Z","$lt":"2023-11-03T22:59:59.999Z"}}&sort=-pickupTime&cursor=new&useFastCount=true',
    },
    next: {
      title: 'next page',
      href: 'orders?where={"account":{"$in":["61605a08fd8070d72f202e21"]},"pickupTime":{"$gt":"2023-10-31T23:00:00.000Z","$lt":"2023-11-03T22:59:59.999Z"}}&sort=-pickupTime&page=2&cursor=new&useFastCount=true',
    },
    last: {
      title: 'last page',
      href: 'orders?where={"account":{"$in":["61605a08fd8070d72f202e21"]},"pickupTime":{"$gt":"2023-10-31T23:00:00.000Z","$lt":"2023-11-03T22:59:59.999Z"}}&sort=-pickupTime&page=2&cursor=new&useFastCount=true',
    },
  },
  _meta: {
    page: 1,
    max_results: 25,
    total: 26,
    cursor: 'e8c9b36f008c6b6b7e881ccfbeff08fe',
  },
};
