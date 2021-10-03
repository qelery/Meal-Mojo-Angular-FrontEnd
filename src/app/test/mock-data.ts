import {
  Address,
  GoogleGeocoderResponse,
  MenuItem,
  OperatingHours,
  Order,
  OrderLine,
  Restaurant,
  Role,
  User,
} from '../shared/model';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
} from '../ngrx/reducers/auth.reducer';

export const mockAddress: Address = {
  street1: '5700 S Lake Shore Dr',
  street2: null,
  street3: null,
  city: 'Chicago',
  state: 'IL',
  zipcode: '60637',
  country: 'US',
  latitude: 41.7905726,
  longitude: -87.5830659,
};

export const mockUser: User = {
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Smith',
  address: mockAddress,
};

export const mockLoginRequest: LoginRequest = {
  username: 'john@example.com',
  password: 'pass123',
};

export const mockLoginResponse: LoginResponse = {
  token: '123abc',
  userInfo: mockUser,
};

export const mockRegisterRequest: RegisterRequest = {
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Smith',
  password: 'pass123',
  role: Role.CUSTOMER,
};

export const mockOperatingHoursList: OperatingHours[] = [
  {
    openTime: '08:00',
    closeTime: '20:00',
    dayOfWeek: 'Friday',
  },
  {
    openTime: '10:00',
    closeTime: '23:00',
    dayOfWeek: 'Saturday',
  },
];

export const mockMenuItems: MenuItem[] = [
  {
    id: 22,
    name: 'Da Bears Burger',
    description: 'smoked brisket, chipotle cheddar sauce, pretzel bun',
    price: 16,
    imageUrl: 'image.jpg',
    isAvailable: true,
  },
  {
    id: 54,
    name: 'Southwestern Cobb Salad',
    description:
      'avocado, red onion, red pepper, hard-boiled egg, chipotle ranch',
    price: 7.5,
    imageUrl: 'image.jpg',
    isAvailable: true,
  },
  {
    id: 72,
    name: 'The Mad Wrapper',
    description:
      'turkey, bacon, avocado, arugula, pepper jack, spanish aioli, pita wrap',
    price: 12,
    imageUrl: 'image.jpg',
    isAvailable: false,
  },
];

export const mockOrderLines: OrderLine[] = [
  {
    id: 1035,
    quantity: 2,
    priceEach: mockMenuItems[0].price,
    menuItem: mockMenuItems[0],
  },
  {
    id: 1036,
    quantity: 3,
    priceEach: mockMenuItems[2].price,
    menuItem: mockMenuItems[2],
  },
  {
    id: 1037,
    quantity: 1,
    priceEach: mockMenuItems[1].price,
    menuItem: mockMenuItems[1],
  },
];

export const mockOrders: Order[] = [
  {
    id: 453,
    tip: 5.0,
    isCompleted: true,
    paymentMethod: 'CARD',
    orderLines: mockOrderLines,
    restaurantId: 456,
    restaurantName: 'The Bad Apple',
    restaurantLogoImageUrl: 'image.jpg',
    customerProfileFirstName: mockUser.firstName,
    customerProfileLastName: mockUser.lastName,
    customerProfileAddress: mockAddress,
  },
];

export const mockRestaurantList: Restaurant[] = [
  {
    id: 456,
    name: 'The Bad Apple',
    description:
      'Laid-back bar & restaurant with creative burgers and an extensive craft beer selection.',
    pickUpAvailable: true,
    pickUpEtaMinutes: 30,
    deliveryAvailable: true,
    deliveryEtaMinutes: 40,
    deliveryFee: 3.5,
    logoImageUrl: 'image.jpg',
    heroImageUrl: 'image.jpg',
    address: mockAddress,
    operatingHoursList: mockOperatingHoursList,
    menuItems: mockMenuItems,
    orders: mockOrders,
  },
];

export const mockGeocodeResult: GoogleGeocoderResponse = {
  results: [
    {
      address_components: [
        {
          long_name: '2301',
          short_name: '2301',
          types: ['street_number'],
        },
        {
          long_name: 'South Lake Shore Drive',
          short_name: 'S Lake Shore Dr',
          types: ['route'],
        },
        {
          long_name: 'Near South Side',
          short_name: 'Near South Side',
          types: ['neighborhood', 'political'],
        },
        {
          long_name: 'Chicago',
          short_name: 'Chicago',
          types: ['locality', 'political'],
        },
        {
          long_name: 'Cook County',
          short_name: 'Cook County',
          types: ['administrative_area_level_2', 'political'],
        },
        {
          long_name: 'Illinois',
          short_name: 'IL',
          types: ['administrative_area_level_1', 'political'],
        },
        {
          long_name: 'United States',
          short_name: 'US',
          types: ['country', 'political'],
        },
        {
          long_name: '60616',
          short_name: '60616',
          types: ['postal_code'],
        },
      ],
      formatted_address: '2301 S Lake Shore Dr, Chicago, IL 60616, USA',
      geometry: {
        location: {
          lat: 41.8526229,
          lng: -87.61195769999999,
        },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: {
            lat: 41.8539718802915,
            lng: -87.61060871970849,
          },
          southwest: {
            lat: 41.8512739197085,
            lng: -87.6133066802915,
          },
        },
      },
      partial_match: true,
      place_id: 'ChIJ-9rosoMrDogR6WQjy2p2nLA',
      plus_code: {
        compound_code: 'V93Q+26 Chicago, IL, USA',
        global_code: '86HJV93Q+26',
      },
      types: ['street_address'],
    },
    {
      address_components: [
        {
          long_name: '#3A',
          short_name: '#3A',
          types: ['subpremise'],
        },
        {
          long_name: 'McCormick Place',
          short_name: 'McCormick Place',
          types: ['premise'],
        },
        {
          long_name: '2301',
          short_name: '2301',
          types: ['street_number'],
        },
        {
          long_name: 'South Doctor Martin Luther King Junior Drive',
          short_name: 'S Martin Luther King Dr',
          types: ['route'],
        },
        {
          long_name: 'Near South Side',
          short_name: 'Near South Side',
          types: ['neighborhood', 'political'],
        },
        {
          long_name: 'Chicago',
          short_name: 'Chicago',
          types: ['locality', 'political'],
        },
        {
          long_name: 'Cook County',
          short_name: 'Cook County',
          types: ['administrative_area_level_2', 'political'],
        },
        {
          long_name: 'Illinois',
          short_name: 'IL',
          types: ['administrative_area_level_1', 'political'],
        },
        {
          long_name: 'United States',
          short_name: 'US',
          types: ['country', 'political'],
        },
        {
          long_name: '60616',
          short_name: '60616',
          types: ['postal_code'],
        },
      ],
      formatted_address: '2301 S Martin Luther King Dr, Chicago, IL 60616, USA',
      geometry: {
        location: {
          lat: 41.8507079,
          lng: -87.61614779999999,
        },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: {
            lat: 41.85205688029149,
            lng: -87.6147988197085,
          },
          southwest: {
            lat: 41.84935891970849,
            lng: -87.6174967802915,
          },
        },
      },
      partial_match: true,
      place_id: 'ChIJH_WNp4ArDogR_-HtNmACtt4',
      plus_code: {
        compound_code: 'V92M+7G Chicago, IL, USA',
        global_code: '86HJV92M+7G',
      },
      types: ['street_address'],
    },
  ],
  status: 'OK',
};
