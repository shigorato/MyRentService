import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title: 'Wood and stone place',
    type: 'apartment', // Исправлено с 'apartament'
    price: 370,
    previewImage: '/img/apartment-01.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 20
      }
    },
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 20 // Исправлено с 13
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
  },
  {
    id: 'cdd06a0e-3f92-446d-9a68-cb64b5d38e2c',
    title: 'Cozy apartment in the heart of Amsterdam', // Исправлено с 'Wood and stone place'
    type: 'room', // Исправлено с 'apartament'
    price: 150, // Исправлено с 370
    previewImage: '/img/apartment-01.jpg',
    city: {
      name: 'Amsterdam', // Исправлено с 'Paris'
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85884,
      longitude: 2.34703,
      zoom: 19 // Исправлено с 13
    },
    isFavorite: false, // Исправлено с true
    isPremium: true, // Исправлено с false
    rating: 4.7, // Исправлено с 4.9
  },
  // Остальные элементы остаются без изменений, так как их ID нет в offers.ts
  {
    "id": "edd06a0e-3f92-446d-9a68-cb64b5d38e2d",
    "title": "Cozy Apartment in the Heart of Cologne",
    "type": "apartment",
    "price": 120,
    'previewImage' : '/img/apartment-02.jpg',
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.937531,
        "longitude": 6.960279,
        "zoom": 12
      }
    },
    "location": {
      "latitude": 50.937531,
      "longitude": 6.960279,
      "zoom": 12
    },
    "isFavorite": true,
    "isPremium": true,
    "rating": 4.7,
  },
  {
    "id": "fdd06a0e-3f92-446d-9a68-cb64b5d38e2e",
    "title": "Modern Loft near Grand Place",
    "type": "loft",
    "price": 200,
    'previewImage' : '/img/apartment-03.jpg',
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.850346,
        "longitude": 4.351721,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.850346,
      "longitude": 4.351721,
      "zoom": 13
    },
    "isFavorite": true,
    "isPremium": false,
    "rating": 4.5,
  },
  {
    "id": "c3d4e5f6-g7h8-9i0j-1k2l-m3n4o5p6q7r8",
    "title": "Charming Canal House",
    "type": "house",
    "price": 300,
    'previewImage' : '/img/apartment-small-04.jpg',
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 14
      }
    },
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 14
    },
    "isFavorite": true,
    "isPremium": true,
    "rating": 4.9,
  },
];