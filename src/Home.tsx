import { FC } from "react";
import './Home.scss';
import './App.scss';
import { Card } from './Card';
import leftArrow from './images/LeftArrow.svg';
import rightArrow from './images/RightArrow.svg'
import ellipseHollow from './images/icon-Ellipse-hollow.svg';
import ellipseFull from './images/icon-Ellipse-full.svg';
import linkArrowRight from './images/icon-Arrow-right.svg';
import apple from './images/icon-Apple.svg';
import phones from './images/apple-phones-ad.png';
import { categories } from "./Info";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "./types/Product";

interface State {
  shop: {
    products: Product[];
    cart: Product[];
    wishlist: Product[];
  };
}

export const Home: FC = () => {
  const products = useSelector((state: State) => state.shop.products);
  const cart = useSelector((state: State) => state.shop.cart);
  const wishlist = useSelector((state: State) => state.shop.wishlist);
  
  console.log(cart, wishlist);

  return (
    <div className="page__main">
      <div className="block block-menu">
        <div className="block__sidebar">
          <ul className="block__sidebar__list">
            <li className="block__sidebar__list__item">Woman's Fashion</li>
            <li className="block__sidebar__list__item">Men's Fashion</li>
            <li className="block__sidebar__list__item">electronics</li>
            <li className="block__sidebar__list__item">home & lifestyle</li>
            <li className="block__sidebar__list__item">medicine</li>
            <li className="block__sidebar__list__item">sports & outdoor</li>
            <li className="block__sidebar__list__item">baby's & toys</li>
            <li className="block__sidebar__list__item">groceries & pets</li>
            <li className="block__sidebar__list__item">health & beauty</li>
          </ul>
        </div>
        <div className="ad">
          <div className="ad__slide">
              <div className="ad__slide__text">
                <div className="ad__header">
                  <img src={apple} alt="apple" className="ad__header__icon"/>
                  <p className="ad__header__title">iPhone 14 Series</p>
                </div>
                <h1 className="ad__main-text">Up to 10%<br/> off Voucher</h1>
                <a href="shop" className="ad__link">
                  <p className="ad__link__text">Shop Now</p> 
                  <img src={linkArrowRight} alt="arrow" className="ad__link-icon icon"/>
                </a>
              </div>
              <img src={phones} alt="phones" className="ad__image"/>
          </div>
          <div className="ad__slide-pages">
              <img
                src={ellipseHollow}
                alt="circle"
                className="ad__slide__button"
              />
              <img
                src={ellipseHollow}
                alt="circle"
                className="ad__slide__button"
              />
              <img
                src={ellipseFull}
                alt="circle"
                className="ad__slide__button"
              />
              <img
                src={ellipseHollow}
                alt="circle"
                className="ad__slide__button"
              />
              <img
                src={ellipseHollow}
                alt="circle"
                className="ad__slide__button"
              />
          </div>
        </div>
      </div>
      <div className="block block-today">
        <h5 className="block__name">
          <div className="block__rectangle"></div>
          Today's
        </h5>
        <div className="block__title">
          <h1 className="block__header__title">Flash sales</h1>
          <div className="block__title__arrows">
            <img 
              src={leftArrow}
              alt="left"
              className="block__header__arrow"
            />
            <img
              src={rightArrow}
              alt="right"
              className="block__header__arrow"
            />
          </div>
        </div>
        {products.length > 0 ? (
          <div className="block-today__products">
            {products.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                place="card--home"
              />
            ))}
          </div>)
          : (
            <div className="block-today__products">
              <p>Loading...</p>
            </div>
          )
        }
        <button className="button button-red block-today__button">view all products</button>
      </div>
      <div className="block categories">
        <div className="categories__header">
          <h5 className="block__name">
            <div className="block__rectangle"></div>
            Categories
          </h5>
          <h1 className="block__title">
            Browse by category
            <div className="block__title__arrows">
              <img 
                src={leftArrow}
                alt="left"
                className="block__header__arrow"
              />
              <img
                src={rightArrow}
                alt="right"
                className="block__header__arrow"
              />
            </div>
          </h1>
        </div>
        <div className="categories__list">
          {categories.map((category, index) => (
            <div key={index} className="categories__list__item">
              <img src={category.img} alt={category.alt} className="categories__list__item__image"/>
              <p className="categories__list__item__name">{category.name}</p>
              </div>
          ))}
        </div>
      </div>
      <div className="block">
        <h5 className="block__name">
          <div className="block__rectangle"></div>
          This Month
        </h5>
        <h1 className="block__title">best selling products</h1>
      </div>
      <div className="block">
        <h5 className="block__name">
          <div className="block__rectangle"></div>
          Our Products
        </h5>
        <h1 className="block__title">Explore our products</h1>
      </div>
      <div className="block">
        <h5 className="block__name">
          <div className="block__rectangle"></div>
          Featured
        </h5>
        <h1 className="block__title">New arrival</h1>
      </div>
    </div>
  )
}
