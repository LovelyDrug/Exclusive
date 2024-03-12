import { FC } from "react";
import { useSelector } from "react-redux";
import { Product } from "./types/Product";
import './Checkout.scss';

interface State {
  shop: {
    cart: Product[];
  };
}

export const Checkout: FC = () => {
  const cart = useSelector((state: State) => state.shop.cart);

  return (
    <div className="page__main checkout">
      <h1 className="checkout__title">Billing details</h1>
      <div className="checkout__blocks">
        <div className="checkout__block">
          <form id="form" className="checkout__form">
            <div className="checkout__item">
              <label htmlFor="name" className="checkout__label">first Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="checkout__input"
                required
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="company" className="checkout__label"> company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                className="checkout__input"
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="address" className="checkout__label">Street Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="checkout__input"
                required
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="city" className="checkout__label">Apartment, floot, etc.(optional)</label>
              <input
                type="text"
                id="city"
                name="city"
                className="checkout__input"
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="city" className="checkout__label">Town/City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="checkout__input"
                required
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="phone" className="checkout__label">phone number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="checkout__input"
                required
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="email" className="checkout__label">Email adress</label>
              <input
                type="email"
                id="email"
                name="email"
                className="checkout__input"
                required
              />
            </div>
          </form>
          <div className="checkout__save">
            <input type="checkbox" name="save" id="save" />
            <label htmlFor="save">Save this information for faster check-out next time</label>
          </div>
        </div>
        <div className="checkout__block checkout__prices">
          <div className="checkout__cart">
            {cart.map((item) => (
              <div key={item.id} className="checkout__line">
                <img src={item.photo} alt={item.name} className="checkout__image" />
                <p>{item.name}</p>
                <p>{item.price * item.quantity}$</p>
              </div>
            ))}
          </div>
          <div className="checkout__total">
            <p className="checkout__text cart--underlined">
              <p>Subtotal:</p>
              <p className="checkout__price">
                {cart.reduce((acc, item) => +acc + +item.price, 0)}$
              </p>
            </p>
            <p className="checkout__text cart--underlined">
              <p>Shipping:</p>
              <p className="checkout__price">Free</p>
            </p>
            <p className="checkout__text">
              <p>Total:</p>
              <p className="checkout__price">
                {cart.reduce((acc, item) => +acc + +item.price, 0)}$
              </p>
            </p>
          </div>
          <div className="checkout__payment">
            <input type="radio" id="card" name="payment" value="card" />
            <label htmlFor="card">Credit card</label>
            <input type="radio" id="cash" name="payment" value="cash" />
            <label htmlFor="cash">Cash on delivery</label>
          </div>
          <div className="checkout__coupon">
            <input type="text" className="checkout__couponInput button button-white" placeholder="Coupon code" />
            <button className="button button-red checkout__couponButton">Apply coupon</button>
          </div>
          <button form="form" className="button button-red">Place order</button>
        </div>
      </div>
    </div>
  )
}