import { useState } from "react";
import { useParams } from "react-router-dom";
import { FullOffer, OffersList } from "../../types/offer";
import { Review } from "../../types/reviews";
import Header from "../../components/header/header";
import NotFoundPage from "../not-found-page/not-found-page";
import MapList from "../../components/map-List/map-List";
import  Map  from "../../components/map/map";
import CommentSubmissionForm from "../../components/comment-form/comment-form";
import { CitiesCardList } from "../../components/citiesCardList/cities-cardList";
import { ReviewsList } from "../../components/reviews__list/reviews__list";


type OfferProps = {
  offers: FullOffer[];
  reviews: Review[];
  offersList: OffersList[];
};

function OfferPage({ offers, reviews, offersList }: OfferProps) {
  const [selectedPoint, setSelectedPoint] = useState<OffersList | null>(null);
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);

  const cityOffers = offer
    ? offersList.filter((item) => item.city.name === offer.city.name)
    : [];

  const handleListItemHover = (offerId: string) => {
    const currentPoint = offersList.find((offer) => offer.title === offerId);
    console.log(currentPoint);
    setSelectedPoint(currentPoint || null);
    
  };
  
  
  if (!offer) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Header />
      
      <main className="page__main page__main--offer">
        <section className="offer">
         
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Interior photo" />
                </div>
              ))}
            </div>
          </div>

          
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="/img/sprite.svg#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              {/* Рейтинг */}
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                </div>
                <span className="offer__rating-value">{offer.rating}</span>
              </div>

              {/* Характеристики */}
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>

              {/* Цена */}
              <div className="offer__price">
                <b className="offer__price-value">€{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              {/* Внутренние удобства */}
              <div className="offer__inside">
                <h2 className="offer__inside-title">What's inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item) => (
                    <li key={item} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Информация о хосте */}
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>

              {/* Отзывы */}
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                <CommentSubmissionForm onSubmit={(review) => console.log(review)} />
              </section>
            </div>
          </div>

          {/* Карта */}
          <section className="offer__map map">
            <h2 className="visually-hidden">Map</h2>
            <div className="map__container">
              <MapList 
                points={cityOffers} 
                onListItemHover={handleListItemHover} 
              />
              <div className="offer-map__inner">
              <Map 
                  city={offer.city} 
                  points={cityOffers} // Передаем полные объекты
                  selectedPoint={selectedPoint}
              />
              </div>
            </div>
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <CitiesCardList offersList={ cityOffers } />
            </div>
          </section>
        </div>
        
      </main>
    </div>
  );
}

export default OfferPage;