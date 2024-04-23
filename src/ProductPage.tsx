import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './ProductPage.scss';
import { Product } from './types/Product';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './Card';
import { ColorCircle } from './ColorCircle';
import './ProductPage.scss';
import wish from './images/Wishlist.svg';
import minus from './images/icon-minus.svg';
import plus from './images/icon-plus.svg';
import { addToCart, addToWishlist } from './redux/reducer';
import classNames from 'classnames';

interface State {
  shop: {
    products: Product[];
  };
}

const backupProduct: Product = {
  id: 0,
  name: 'Product not found',
  price: 0,
  photo: '',
  rating: 0,
  discount: 0,
  quantity: 0,
  colors: [],
  description: 'Product not found',
};

export const ProductPage: React.FC = () => {
  const products = useSelector((state: State) => state.shop.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product>(backupProduct);
  const [newQuantity, setNewQuantity] = useState<number>(1);
  const [activeSize, setActiveSize] = useState<string>('M');
  const [activeColor, setActiveColor] = useState<string>(product.colors[0] || '');
  
  const id = window.location.pathname.split('/').pop();

  useEffect(() => {
    setProduct(products.find((product) => product.id === Number(id)) || backupProduct);
  }, [id]);
  
  
  const changeColor = useCallback((color: string) => {
    setActiveColor(color);
  }, [activeColor]);

  return (
    <div className='page__main product'>
      <h2 className="product__header">
        Account / gaming / 
        <span className="product__header__product">{product.name}</span>
      </h2>
      <div className="product__details">
        <div className="product__details__images">
          <div className="product__details__smallImages">
            <div className="product__details__smallImage"></div>
            <div className="product__details__smallImage"></div>
            <div className="product__details__smallImage"></div>
            <div className="product__details__smallImage"></div>
          </div>
          <div className="product__details__bigImage">
            <img
              src={product.photo}
              alt={product.name}
              className="product__details__image"
            />
          </div>
        </div>
        <div className="product__info">
          <div className="product__info__main">
            <h3 className="product__info__title">{product.name}</h3>
            <p className="product__info__price">${product.price}</p>
          </div>
          <div className="product__info__addition">
            <p className="product__info__description">
              {product.description}
            </p>
            <div className="underline"></div>
            {product.colors.length > 0 && (
              <div className='product__info__colors'>Colours: 
              {product.colors.map((color) => (
                <ColorCircle
                  color={color}
                  key={color}
                  changeColor={changeColor}
                  activeColor={activeColor}
                />
              ))}
            </div>
            )}
            <div className="product__info__sizes">
              <p className="product__info__sizes__title">Size:</p>
              <div className="product__info__sizes__buttons">
                <button
                  className={classNames("product__info__sizes__button button-white", {
                    'product__info__sizes__button--active': activeSize === 'XS',
                    })}
                  onClick={() => {
                    setActiveSize('XS');
                  }}
                >XS</button>
                <button
                  className={classNames("product__info__sizes__button button-white", {
                    'product__info__sizes__button--active': activeSize === 'S',
                    })}
                  onClick={() => {
                      setActiveSize('S');
                    }}
                >S</button>
                <button
                  className={classNames("product__info__sizes__button button-white", {
                    'product__info__sizes__button--active': activeSize === 'M',
                    })}
                  onClick={() => {
                      setActiveSize('M');
                    }}
                >M</button>
                <button
                  className={classNames("product__info__sizes__button button-white", {
                    'product__info__sizes__button--active': activeSize === 'L',
                    })}
                  onClick={() => {
                      setActiveSize('L');
                    }}
                >L</button>
                <button
                  className={classNames("product__info__sizes__button button-white", {
                    'product__info__sizes__button--active': activeSize === 'XL',
                    })}
                  onClick={() => {
                      setActiveSize('XL');
                    }}
                >XL</button>
              </div>
            </div>
          </div>
          <div className="product__info__coolStuff">
            <div className="product__info__coolStuff__coolButtons">
              <div className="product__info__coolStuff__quantity">
                <button
                  className="product__info__coolStuff__quantity__minus button button-white"
                  onClick={() => {
                    if (newQuantity > 1) {
                      setNewQuantity(newQuantity - 1);
                    }
                  }}
                >
                    <img src={minus} alt="minus" />
                </button>
                <p
                  className="product__info__coolStuff__quantity__input"
                >
                  {newQuantity}
                </p>
                <button
                  className="product__info__coolStuff__quantity__plus button button-red"
                  onClick={() => {
                    setNewQuantity(newQuantity + 1);
                  }}
                >
                  <img src={plus} alt="plus" />
                </button>
              </div>
              <button
                className="product__info__coolStuff__button button button-small button-red"
                onClick={() => {
                  dispatch(addToCart({ ...product, quantity: newQuantity }));
                }}
              >
                Buy now
              </button>
              <button
                className="product__info__coolStuff__button button-icon button-white"
                onClick={() => {
                  dispatch(addToWishlist(product));
                }}
              >
                <img src={wish} alt="wish" />
              </button>
            </div>
            <img className='product__info__wish' />
            <div className="product__info__coolBlocks">
              <div className="product__info__coolBlock">
                <img src="../icons/icon-delivery.svg" alt="truck" />
                <div className="product__info__coolBlock__text">
                  <h2 className='product__info__coolBlock__title'>Free delivery</h2>
                  <a href='/' className='product__info__coolBlock__subtitle'>Enter your postal code for Delivery Availability</a>
                </div>
              </div>
              <div className="product__info__coolBlock">
                <img src="../icons/icon-return.svg" alt="return" />
                <div className="product__info__coolBlock__text">
                  <h2 className='product__info__coolBlock__title'>Return Delivery</h2>
                  <p className='product__info__coolBlock__subtitle'>Free 30 Days Delivery Returns. 
                    <a href="/">Details</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product__related">
        <h2 className='product__related__title'>
          <div className="block__rectangle"></div>
          Related item
        </h2>
        <div className="product__related__items">
          {products
            .slice(0, 4)
            .map((product) => (
              <Card
                card={product}
                place='card--home'
                key={product.id}
              />
          ))}
        </div>      </div>
    </div>
  );
};
