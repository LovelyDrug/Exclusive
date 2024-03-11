import { FC} from "react";
import './Card.scss';
import like from './images/Like.svg';
import view from './images/View.svg';
import remove from './images/Remove.svg';

import { Product } from './types/Product';
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist, removeFromWishlist } from "./redux/reducer";

interface Props {
  card: Product;
  place: string;
}

export const Card: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();

  const { card, place } = props;
  const { photo, name, price } = card;

  return (
    <div className={`card ${place}`}>
      <div className="card__image">
        <img src={photo} alt="product" className="card__product"/>
        <div className="card__image__icons">
          {place === 'card--wishlist' && 
            <img
              src={remove}
              alt="remove"
              className="card__icon card--wishlist__icon"
              onClick={() => {
                console.log('remove')
                dispatch(removeFromWishlist(card))
              }}
            />
          }
          {place === 'card--home' && 
            <>
              <img
              src={like}
              alt="like"
              className="card__icon card--home__icon"
              onClick={() => dispatch(addToWishlist(card))}
              />
              <img src={view} alt="view" className="card__icon card--home__icon"/>
            </>
          }
        </div>
        <button className="card__add" onClick={() => dispatch(addToCart(card))}>Add to cart</button>
      </div>
      <div className="card__details">
        <p className="card__name">{name}</p>
        <p className="card__price">{price}$</p>
      </div>
    </div>
  )
}