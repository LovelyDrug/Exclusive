import { FC, useCallback, useState } from "react";
import { removeFromCart, modifyQuantity } from "./redux/reducer";
import { Product } from "./types/Product";
import cancel from './images/icon-Cancel.svg';
import up from './images/Drop-Up-Small.svg';
import down from './images/Drop-Down-Small.svg';
import { useDispatch, useSelector } from "react-redux";

interface Props {
  item: Product;
}

interface State {
  shop: {
    cart: Product[];
  };
}

export const CartRow: FC<Props> = ({ item }) => {
  const quantity = useSelector((state: State) => state.shop.cart.find((cartItem) => cartItem.id === item.id)?.quantity);
  const [currentQuantity, setQuantity] = useState(quantity || 1);
  const dispatch = useDispatch();
  
  const changeQuantity = useCallback((item: Product, quantity: number) => {
    if (quantity < 1) {
      return;
    }
    setQuantity(quantity);
    dispatch(modifyQuantity({...item, quantity}));
  }, [currentQuantity]);


  return (
    <>
      <tr key={item.id} className="cart__row">
        <td className="cart__name">
          <img src={item.photo} alt={item.name} className="cart__image"/>
          <p>{item.name}</p>
        </td>
        <td>{item.price}$</td>
        <td>
          <div className="cart__quantity">
            <img
              src={up}
              alt="up"
              className="cart__quantityArrow up"
              onClick={() => changeQuantity(item, currentQuantity + 1)}
            />
            <input
              type="number"
              name="quantity"
              id="quantity"
              min="1"
              className="cart__quantityInput"
              value={currentQuantity}
              disabled
            />
            <img
              src={down}
              alt="down"
              className="cart__quantityArrow down"
              onClick={() => {
                if (currentQuantity > 1) {
                  changeQuantity(item, currentQuantity - 1);
                }
              }}
            />
          </div>
        </td>
        <td>{item.price * currentQuantity}$</td>
        <td>
          <img
            src={cancel}
            alt="cancel"
            className="cart__cancel"
            onClick={() => dispatch(removeFromCart(item))}
          />
        </td>
      </tr>
    </>
  )}