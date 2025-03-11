import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import FavoritesPage from "../../pages/favorites/favorites-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import Offer from "../../pages/offer-page/offer-page";
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer, OffersList } from "../../types/offer";

type AppProps = {
  rentalOffersCount: number;
  offers: FullOffer[];
  offersList: OffersList[];
};

function App({ rentalOffersCount, offers, offersList }: AppProps): JSX.Element {
  // Фильтруем только избранные предложения
  const favoriteOffers = offersList.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<Offer offers={offers} />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage favorites={favoriteOffers} />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
