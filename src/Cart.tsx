import { FC } from "react";
import { useSelector } from "react-redux";
import { Product } from "./types/Product";
import './Cart.scss';
import { Link } from "react-router-dom";
import { CartRow } from "./CartRow";

interface State {
  shop: {
    cart: Product[];
  };
}

export const Cart: FC = () => {
  const cart = useSelector((state: State) => state.shop.cart);
  const path = window.location.pathname;
  
  return (
    <div className="page__main cart">
      <p className="page__main__road">
        Home / {path.slice(1)}
      </p>
      <div className="cart__block">
        {cart.length === 0 ?
          <p className="cart__empty">Your cart is empty</p>
          : <table className="cart__table">
            <thead className="cart__header">
              <tr className="cart__row">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody className="cart__body">
              {cart.map((item) => (
                <CartRow item={item} key={item.id}/>
              ))}
            </tbody>
            <div className="cart__buttons">
              <Link to='/' className="button button-white" >return to shop</Link>
              <button className="button button-white">update cart</button>
            </div>
          </table>
        }
      </div>
      <div className="cart__prices">
        <div className="cart__coupon">
          <input type="text" className="cart__couponInput button button-white" placeholder="Coupon code" />
          <button className="button button-red cart__couponButton">Apply coupon</button>
        </div>
        <div className="cart__total">
            <h3 className="cart__total__title">Cart total</h3>
            <p className="cart__text cart--underlined">
              <p>Subtotal:</p>
              <p className="cart__price">
                {cart.reduce((acc, item) => +acc + +item.price, 0)}$
              </p>
            </p>
            <p className="cart__text cart--underlined">
              <p>Shipping:</p>
              <p className="cart__price">Free</p>
            </p>
            <p className="cart__text">
              <p>Total:</p>
              <p>
                {cart.reduce((acc, item) => +acc + +item.price, 0)}$
              </p>
            </p>
          <Link 
            to='/checkout'
            className="button button-red cart__total__button"
          >proceed to checkout</Link>
        </div>
      </div>
    </div>
  )
}