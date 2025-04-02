import React from 'react'
import ReactDom from 'react-dom/client'
import App from './components/app/app'
import { offers } from './mocks/offers';
import { offersList } from './mocks/offers-list';
import { reviews } from "./mocks/reviews";
import { Provider } from 'react-redux';
import { store } from './store/index';


const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App 
      offers = {offers}
      offersList = {offersList}
      reviews={reviews}
    />
    </Provider>
  </React.StrictMode>
);
