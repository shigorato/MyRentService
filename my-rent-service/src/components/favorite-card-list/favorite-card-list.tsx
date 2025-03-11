import { JSX } from "react";
import FavoriteCard from "../favorite-card/favorite-card";
import { OffersList } from "../../types/offer";

type FavoriteCardListProps = {
  favorites: OffersList[];
};

function FavoriteCardList({ favorites }: FavoriteCardListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {favorites.map((offer) => (
        <FavoriteCard
          key={offer.id}
          id={offer.id}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          isPremium={offer.isPremium}
          previewImage={offer.previewImage}
          rating={offer.rating}
        />
      ))}
    </div>
  );
}

export default FavoriteCardList;
