import { Product } from "../types/Product";

export const ADD_TO_WISHLIST = 'ADD_PRODUCT_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_PRODUCT_FROM_WISHLIST';
export const ADD_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const SET_PRODUCTS = 'SET_PRODUCTS';


export const addProductToCart = (product: Product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const setProducts = (products: Product[]) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
}

export const removeProductFromCart = (product: Product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const addProductToWishlist = (product: Product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};

export const removeProductFromWishlist = (product: Product) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: product,
  };
};
