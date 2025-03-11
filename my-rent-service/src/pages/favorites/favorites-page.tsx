import { JSX } from "react";
import Header from "../../components/header/header";
import FavoriteCardList from "../../components/favorite-card-list/favorite-card-list";
import { OffersList } from "../../types/offer";

type FavoritesPageProps = {
  favorites: OffersList[];
};

function FavoritesPage({ favorites }: FavoritesPageProps): JSX.Element {
  // Группируем избранные объявления по городам
  const groupedFavorites = favorites.reduce<Record<string, OffersList[]>>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }
    acc[offer.city.name].push(offer);
    return acc;
  }, {});

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favorites.length > 0 ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listings</h1>
              <ul className="favorites__list">
                {Object.entries(groupedFavorites).map(([city, offers]) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <FavoriteCardList favorites={offers} />
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Mark some properties as favorite to add them here.</p>
              </div>
            </section>
          )}
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="Rent service logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
