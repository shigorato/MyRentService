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

export {Setting,AppRoute,AuthorizationStatus}; 