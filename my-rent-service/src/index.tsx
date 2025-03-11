import React from 'react'
import ReactDom from 'react-dom/client'
import App from './components/app/app'
import { Setting } from './const'
import { offers } from './mocks/offers';
import { offersList } from './mocks/offers-list';

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App 
    rentalOffersCount={Setting.rentalOffersCount}
      offers = {offers}
      offersList = {offersList}
    />
  </React.StrictMode>
)
