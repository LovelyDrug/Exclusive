import { FC, useCallback } from "react";
import './Card.scss';
import like from './images/Like.svg';
import view from './images/View.svg';
import remove from './images/Remove.svg';

import { Product } from '../types/Product';
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist, removeFromWishlist } from "../redux/reducer";
import { useNavigate } from "react-router-dom";

interface Props {
  card: Product;
  place: string;
}

export const Card: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { card, place } = props;
  const { photo, name, price } = card;

  const handleSetProduct = useCallback(() => {
    navigate(`/product/${card.id}`);
  }, [card]);

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(card));
  }, [card]);

  return (
    <div className={`card ${place}`}>
      <div className="card__image">
        {card.discount && 
          <span className="card__discount">-{card.discount}%</span>
        }
        <img 
          src={photo}
          alt="product"
          className="card__product"
        />
        <div className="card__image__icons">
          {place === 'card--wishlist' && 
            <img
              src={remove}
              alt="remove"
              className="card__icon card--wishlist__icon"
              onClick={() => {
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
              <img
                src={view}
                alt="view"
                className="card__icon card--home__icon"
                onClick={() => handleSetProduct()}
              />
            </>
          }
        </div>
        <button className="card__add" onClick={() => handleAddToCart()}>Add to cart</button>
      </div>
      <div className="card__details">
        <p className="card__name">{name}</p>
        <div className="card__price">
          {card.discount ? 
            <>
            <span className="card__price__real">${price - price * card.discount / 100}</span>
            <span className="card__price__old">${price}</span>
            </>
            : <span className="card__price__real">${price}</span>
          }
        </div>
      </div>
    </div>
  )
}