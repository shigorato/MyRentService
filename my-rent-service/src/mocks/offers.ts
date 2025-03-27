import { FullOffer } from '../types/offer';

export const offers: FullOffer[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title: 'Wood and stone place',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families',
    type: 'apartment',
    price: 370,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    bedrooms: 2,
    goods: [
      'Heating',
      'Wi-Fi',
      'Fridge',
      'Laptop friendly workspace',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Dishwasher',
      'Kitchen',
      'Washing machine',
      'Breakfast',
      'Coffee machine'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      '/img/wood-and-stone-place-1.png',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/studio-01.jpg',
    ],
    maxAdults: 3
  },
  {
    id: 'cdd06a0e-3f92-446d-9a68-cb64b5d38e2c',
    title: 'Cozy apartment in the heart of Amsterdam',
    description: 'Comfortable apartment with a great view of the canals. Perfect for couples or small families.',
    type: 'room',
    price: 150,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    bedrooms: 1,
    goods: [
      'Heating',
      'Wi-Fi',
      'Fridge',
      'Laptop friendly workspace',
      'Air conditioning',
      'Washer',
      'Towels',
      'Dishwasher',
      'Kitchen',
      'Washing machine',
      'Breakfast',
      'Coffee machine'
    ],
    host: {
      name: 'John',
      avatarUrl: '/img/avatar-john.png',
      isPro: false
    },
    images: [
      '/img/cozy-apartment-amsterdam-1.png',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/studio-01.jpg',
    ],
    maxAdults: 2
  },
  {
    id: 'edd06a0e-3f92-446d-9a68-cb64b5d38e2d',
    title: 'Luxury penthouse in Berlin',
    description: 'Spacious and luxurious penthouse with stunning views of the city. Ideal for business trips or vacations.',
    type: 'house',
    price: 500,
    city: {
      name: 'Berlin',
      location: {
        latitude: 52.520008,
        longitude: 13.404954,
        zoom: 13
      }
    },
    location: {
      latitude: 52.521918,
      longitude: 13.410705,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    bedrooms: 3,
    goods: [
      'Heating',
      'Wi-Fi',
      'Fridge',
      'Laptop friendly workspace',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Dishwasher',
      'Kitchen',
      'Washing machine',
      'Breakfast',
      'Coffee machine'
    ],
    host: {
      name: 'Emily',
      avatarUrl: '/img/avatar-emily.jpg',
      isPro: true
    },
    images: [
      '/img/luxury-penthouse-berlin-1.png',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/studio-01.jpg',
    ],
    maxAdults: 4
  },
  {
    id: 'fdd06a0e-3f92-446d-9a68-cb64b5d38e2e',
    title: 'Charming cottage in Copenhagen',
    description: 'Quaint and charming cottage surrounded by nature. Perfect for a peaceful getaway.',
    type: 'hotel',
    price: 200,
    city: {
      name: 'Copenhagen',
      location: {
        latitude: 55.676098,
        longitude: 12.568337,
        zoom: 13
      }
    },
    location: {
      latitude: 55.677036,
      longitude: 12.569963,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
    bedrooms: 2,
    goods: [
      'Heating',
      'Wi-Fi',
      'Fridge',
      'Laptop friendly workspace',
      'Air conditioning',
      'Washer',
      'Towels',
      'Dishwasher',
      'Kitchen',
      'Washing machine',
      'Breakfast',
      'Coffee machine'
    ],
    host: {
      name: 'Michael',
      avatarUrl: '/img/avatar-michael.png',
      isPro: false
    },
    images: [
      '/img/charming-cottage-copenhagen-1.png',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/studio-01.jpg',
    ],
    maxAdults: 3
  }
];

