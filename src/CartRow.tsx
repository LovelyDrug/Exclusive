import { FC, useState } from "react"
import { removeFromCart } from "./redux/reducer"
import { Product } from "./types/Product";
import cancel from './images/icon-Cancel.svg'
import { useDispatch } from "react-redux";
import { modifyQuantity } from "./redux/actions";

interface Props {
  item: Product;
}

export const CartRow: FC<Props> = ({ item }) => {
  const [currentQuantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();
  
  const changeQuantity = (item: Product, quantity: string) => {
    setQuantity(+quantity);
    dispatch(modifyQuantity(item, currentQuantity));
  };

  return (
    <div className="cart__line">
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
            value={currentQuantity}
            onChange={(e) => changeQuantity(item, e.target.value)}
            
          />
        </td>
        <td>{item.price * currentQuantity}$</td>
      </tr>
      <img
        src={cancel}
        alt="cancel"
        className="cart__cancel"
        onClick={() => dispatch(removeFromCart(item))}
      />
    </div>
  )}