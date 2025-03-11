import { JSX } from "react";
import { FullOffer } from "../../types/offer";
import NearPlaces  from "../../components/near-place/near-place"
import Header from "../../components/header/header";
import { useParams } from "react-router-dom";
import NotFoundPage from "../not-found-page/not-found-page";
import ReviewForm from "../../components/review-form/review-form";

type OfferProps = {
  offers: FullOffer[];
};

function Offer({ offers }: OfferProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);

  if (!offer) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          {/* Галерея изображений */}
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((img) => (
                <div className="offer__image-wrapper" key={img}>
                  <img className="offer__image" src={img} alt={`${offer.title} image`} />
                </div>
              ))}
            </div>
          </div>

          {/* Информация о предложении */}
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
                    <use xlinkHref="#icon-bookmark"></use>
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
                <li className="offer__feature offer__feature--entire">
                  {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              
              {/* Описание предложения */}
              <div className="offer__description">
                <p>{offer.description}</p>
              </div>
              
              {/* Удобства */}
              <div className="offer__goods">
                <h2 className="offer__goods-title">What's inside</h2>
                <ul className="offer__goods-list">
                  {offer.goods.map((good, index) => (
                    <li className="offer__goods-item" key={index}>{good}</li>
                  ))}
                </ul>
              </div>
              
              {/* Информация о хозяине */}
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user">
                  <img
                    className="offer__avatar"
                    src={offer.host.avatarUrl}
                    alt={`${offer.host.name} avatar`}
                    width="74"
                    height="74"
                  />
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__host-description">
                  <p>
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              
              {/* Раздел с отзывами и формой отправки комментария */}
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews</h2>
                {/* Здесь можно отобразить список отзывов, если он есть */}
                <ReviewForm onSubmit={(review) => console.log(review)} />
              </section>
            </div>
          </div>
        </section>
        <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
              <NearPlaces/>
              <NearPlaces/>
              <NearPlaces/>
              </div>
            </section>
          </div>
      </main>
    </div>
  );
}

export default Offer;
