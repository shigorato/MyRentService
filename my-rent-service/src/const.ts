import { CityOffer } from './types/offer';

export const CITIES_LOCATION: CityOffer[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.937531,
      longitude: 6.960279,
      zoom: 12
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.850346,
      longitude: 4.351721,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 14
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.227741,
      longitude: 6.773456,
      zoom: 13
    }
  }
];

const SortOffersType = {
  Popular: 'Popular',
  PriceToHigh: 'Price: low to high',
  PriceToLow: 'Price: high to low',
  TopRated: 'Top rated first'
};


const Setting = {
    rentalOffersCount:321,
}  as const;

const AppRoute = {
    Main:'/',
    Login: '/login',
    Favorites: '/favorites',
    Offer: '/offer'
} as const;

const AuthorizationStatus = {
    Auth: "Auth",
    NoAuth: "No_Auth",
    Unknow: "UNKNOW",
} as const;

const NameSpace = {
  User: 'USER',
  Offers: 'OFFERS',
  Review: 'REVIEW'
} as const;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export {Setting,AppRoute,AuthorizationStatus, SortOffersType, NameSpace}; 