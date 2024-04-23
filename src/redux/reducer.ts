import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import { User } from "../types/User";

interface State {
  cart: Product[];
  wishlist: Product[];
  users: User[];
  products: Product[];
  user: User | null;
}

const intialState: State = {
  cart: [],
  wishlist: [],
  users: [],
  products: [],
  user: null,
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

      state.cart = [...state.cart, {...action.payload, quantity: 1}];
    },
    modifyQuantity: (state, action) => {
      state.cart = state.cart.map(
        (item) => item.id === action.payload.id ?
          {...item, quantity: action.payload.quantity}
          : item
      );
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    addToWishlist: (state, action) => {
      if(state.wishlist.find((item) => item.id === action.payload.id)) return;

      state.wishlist = [...state.wishlist, action.payload];
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);
    },
    setUser: (state, action) => {
      const existingUser = state.users.find((user) => 
      user.email === action.payload.email && user.password === action.payload.password
      );
      existingUser ? state.user = existingUser
      : alert('User not found. Please create an account.');
    },
    addNewUser: (state, action) => {
      if(state.users.find((user) => user.email === action.payload.email)) {
        alert('User already exists. Please login.');
        return;
      };

      state.users = [...state.users, action.payload];
      alert('Account created successfully! Please login to continue.');
    },
  },
});

export const { 
  addNewUser,
  modifyQuantity,
  setProducts,
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  setUser
} = slice.actions;

export default slice.reducer;
