import { useState } from "react";
import { useAppSelector } from "../../hooks";
import  SortOptions  from "../../components/sorting-options/sorting-options"
import MapList from "../../components/map-List/map-List";
import  Map  from "../../components/map/map";
import Header from "../../components/header/header";
import { CitiesCardList } from "../../components/citiesCardList/cities-cardList";
import { CitiesList } from "../../components/citiesList/cities-list";
import { OffersList } from "../../types/offer";
import { getOffersByCity, sortOffersByType } from "../../utils";
import { SortOffer } from "../../types/sort";


function MainPage() {
  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');

 const selectedCity = useAppSelector((state) => state.city);
  const offersList = useAppSelector((state) => state.offers)
  const selectedcityOffers = getOffersByCity(selectedCity?.name, offersList)
  const rentalOffersCount = selectedcityOffers.length;
 console.log(rentalOffersCount);
  const [selectedOffer, setSelectedOffer] = useState< OffersList | null>(
    null 
  )
  

  const handleListItemHover = (offerId : string) =>{
    const currentOffer = selectedcityOffers.find((offer) => offer.title === offerId);
    setSelectedOffer(currentOffer || null)
    
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {rentalOffersCount } places to stay in {selectedCity?.name}
              </b>
              <SortOptions activeSorting={activeSort} onChange={(newSorting: any) => setActiveSort(newSorting)}/>
              <div className="cities__places-list places__list tabs__content">
                <CitiesCardList offersList={sortOffersByType(selectedcityOffers, activeSort)} 
                /> 
              </div>
            </section>
            <div className="cities__right-section-map">
              
               <h1 className="title__map">Аппартаменты города {selectedCity?.name}:</h1> 
              <div className="map__container">
              <MapList points={selectedcityOffers} onListItemHover={handleListItemHover}/>
                <div className="map__inner">
                <Map city={selectedCity} points={selectedcityOffers} selectedPoint={selectedOffer}  />
                </div> 
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;