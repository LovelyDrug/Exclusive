import { FC } from "react";
import { useSelector } from "react-redux";
import { Product } from "./types/Product";
import './Checkout.scss';

interface State {
  shop: {
    cart: Product[];
  };
}

interface Order {
  name: string;
  company: string | null;
  address: string | null;
  apartment: string | null;
  city: string | null;
  phone: string | null;
  email: string | null;
  payment: string | null;
  save: string | null;
  products: Product[];
}

export const Checkout: FC = () => {
  const cart = useSelector((state: State) => state.shop.cart);

  const createOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name')?.toString() || '';
    const company = data.get('company')?.toString() || '';
    const address = data.get('address')?.toString() || '';
    const apartment = data.get('apartment')?.toString() || '';
    const city = data.get('city')?.toString() || '';
    const phone = data.get('phone')?.toString() || '';
    const email = data.get('email')?.toString() || '';
    const payment = data.get('payment')?.toString() || '';
    const save = data.get('save')?.toString() || '';
    const products = cart;
    const order: Order = {
      name,
      company,
      address,
      apartment,
      city,
      phone,
      email,
      payment,
      save,
      products
    };
    console.log(order);
  }

  return (
    <div className="page__main checkout">
      <h1 className="checkout__title">Billing details</h1>
      <div className="checkout__blocks">
        <div className="checkout__block">
          <form
            id="form"
            className="checkout__form"
            onSubmit={createOrder}
          >
            <div className="checkout__item">
              <label htmlFor="name" className="checkout__label">first Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                required
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="company" className="checkout__label"> company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                className="input"
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="address" className="checkout__label">Street Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="input"
                required
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="apartment" className="checkout__label">Apartment, floot, etc.(optional)</label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                className="input"
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="city" className="checkout__label">Town/City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="input"
                required
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="phone" className="checkout__label">phone number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="input"
                required
              />
            </div>
            <div className="checkout__item">
              <label htmlFor="email" className="checkout__label">Email adress</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                required
              />
            </div>
          </form>
          <div className="checkout__save">
            <input
              form="form"
              type="checkbox"
              name="save"
              id="save"
              className="checkout__save__input"
            />
            <label htmlFor="save">Save this information for faster check-out next time</label>
          </div>
        </div>
        <div className="checkout__block checkout__prices">
          <div className="checkout__cart">
            {cart.map((item) => (
              <div key={item.id} className="checkout__line">
                <div className="checkout__product">
                  <img src={item.photo} alt={item.name} className="checkout__image" />
                  <p>{item.name}</p>
                </div>
                <p>{item.price * item.quantity}$</p>
              </div>
            ))}
          </div>
          <div className="checkout__total">
            <p className="checkout__text">
              <p>Subtotal:</p>
              <p className="checkout__price">
                {cart.reduce((acc, item) => +acc + +item.price * item.quantity, 0)}$
              </p>
            </p>
            <div className="underline"></div>
            <p className="checkout__text">
              <p>Shipping:</p>
              <p className="checkout__price">Free</p>
            </p>
            <div className="underline"></div>
            <p className="checkout__text">
              <p>Total:</p>
              <p className="checkout__price">
                {cart.reduce((acc, item) => +acc + +item.price * item.quantity, 0)}$
              </p>
            </p>
          </div>
          <div className="checkout__payment">
            <div className="checkout__payment__item">
              <input
                type="radio"
                id="card"
                name="payment"
                value="card"
                className="checkout__payment__input"
                defaultChecked
              />
              <label htmlFor="card">Credit card</label>
            </div>
            <div className="checkout__payment__item">
              <input
                type="radio"
                id="cash"
                name="payment"
                value="cash"
                className="checkout__payment__input"
              />
              <label htmlFor="cash">Cash on delivery</label>
            </div>
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