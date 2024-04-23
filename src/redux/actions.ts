import { Product } from "../types/Product";
import { User } from "../types/User";

const ADD_TO_WISHLIST = 'ADD_PRODUCT_TO_WISHLIST';
const REMOVE_FROM_WISHLIST = 'REMOVE_PRODUCT_FROM_WISHLIST';
const ADD_TO_CART = 'ADD_PRODUCT_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
const SET_PRODUCTS = 'SET_PRODUCTS';
const MODIFY_QUANTITY = 'MODIFY_QUANTITY';
const SET_USER = 'SET_USER';
const ADD_NEW_USER = 'ADD_NEW_USER';


export const addProductToCart = (product: Product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const setUser = (user: User) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const addNewUser = (user: User) => {
  return {
    type: ADD_NEW_USER,
    payload: user,
  };
}

export const modifyQuantity = (product: Product, quantity: number) => {
  return {
    type: MODIFY_QUANTITY,
    payload: { ...product, quantity },
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
