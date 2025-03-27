import { useState } from "react";
import { FullOffer } from "../../types/offer";
import { useParams } from "react-router-dom";
import {Point} from "../../types/map-types"
import { ReviewsList } from "../../components/reviews__list/reviews__list";
import { Review } from "../../types/reviews";
import NearPlaces from "../../components/near-place/near-place";
import Header from "../../components/header/header";
import NotFoundPage from "../not-found-page/not-found-page";
import CITY from "../../mocks/city";
import POINTS from "../../mocks/points";
import List from "../../list";
import Map from "../../components/map/map";
import CommentSubmissionForm from "../../components/comment-form/comment-form"


type OfferProps = {
  offers: FullOffer[];
  reviews:Review[];
};

function OfferPage({ offers, reviews }: OfferProps) {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null); 
  
  const handleListItemHover = (listItemName: string) => {
    const currentPoint = POINTS.find((point) => point.title === listItemName);
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
              {offer.images.map((item) => (
                <div key={item} className="offer__image-wrapper">
                  <img className="offer__image" src={item} alt="Photo studio" />
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
                <h1 className="offer__name">Beautiful &amp; {offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="/img/sprite.svg#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">{offer.bedrooms} Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max {offer.maxAdults} adults</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item) => (
                    <li key={item} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro ? <span className="offer__user-status">Pro</span> : null}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews"> 
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>       
              <ReviewsList reviews={reviews}/>
              <CommentSubmissionForm onSubmit={(review) => console.log(review) }/>
              </section>
            </div>
          </div>
          <section className="offer__map map">
            
          <h1 className="title__map">Парки города {CITY.title}:</h1>
              <div className="map__container">
            <List points={POINTS} onListItemHover={handleListItemHover} />
            <div className="offer-map__inner">
              <Map city={CITY} points={POINTS} selectedPoint={selectedPoint} />
              </div>
            </div>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearPlaces />
              <NearPlaces />
              <NearPlaces />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;