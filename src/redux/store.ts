import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import reducer from './reducer';
import { User } from '../types/User';

interface State {
  cart: Product[];
  wishlist: Product[];
  user: User | null;
  products: Product[];
};

let initialState: State = {
  cart: [],
  wishlist: [],
  user: null,
  products: [],
};

const savedState = localStorage.getItem('reduxState');
initialState = savedState ? JSON.parse(savedState) : initialState;

export const store = configureStore({
  reducer: combineReducers({
    shop: reducer,
  }),
  preloadedState: initialState as Partial<{ shop: State }>,
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
