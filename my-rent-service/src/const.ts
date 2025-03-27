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

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export {Setting,AppRoute,AuthorizationStatus}; 