import { FC, useState } from "react";
import './Card.scss';
import like from './images/Like.svg';
import view from './images/View.svg';
import { Product } from './types/Product';

export const Card: FC<Product> = ({ name, price, image }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt="product" className="card__product"/>
        <div className="card__image__icons">
          <img src={like} alt="like" className="card__icon"/>
          <img src={view} alt="view" className="card__icon"/>
        </div>
      </div>
      <div className="card__details">
        <p className="card__name">{name}</p>
        <p className="card__price">{price}$</p>
      </div>
    </div>
  )
}