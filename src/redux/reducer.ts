import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/Product";

interface State {
  cart: Product[];
  wishlist: Product[];
  user: any;
  products: Product[];
}

const intialState: State = {
  cart: [],
  wishlist: [],
  user: null,
  products: [],
};

export const slice = createSlice({
  name: "shop",
  initialState: intialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      if(state.cart.find((item) => item.id === action.payload.id)) return;

      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item !== action.payload);
    },
    addToWishlist: (state, action) => {
      if(state.wishlist.find((item) => item.id === action.payload.id)) return;

      state.wishlist = [...state.wishlist, action.payload];
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setProducts, addToCart, removeFromCart, addToWishlist, removeFromWishlist, setUser } = slice.actions;

export default slice.reducer;
