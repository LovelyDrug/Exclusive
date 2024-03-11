import { FC } from "react";
import { useSelector } from "react-redux";
import { Product } from "./types/Product";
import './Cart.scss';

interface State {
  shop: {
    cart: Product[];
  };
}

export const Cart: FC = () => {
  const cart = useSelector((state: State) => state.shop.cart);

  return (
    <div className="page__main cart">
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
                <tr key={item.id} className="cart__row">
                  <td className="cart__name">
                    <img src={item.photo} alt={item.name} className="cart__image"/>
                    <p>{item.name}</p>
                  </td>
                  <td>{item.price}$</td>
                  <td>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      min="1"
                      className="cart__quantityInput"
                      value={item.quantity}
                    />
                  </td>
                  <td>{item.price}$</td>
                </tr>
              ))}
            </tbody>
            <div className="cart__buttons">
              <button className="button button-white">return to shop</button>
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
          <button className="button button-red">proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}