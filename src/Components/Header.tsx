import { Outlet, Link } from "react-router-dom";
import logo from './images/Logo.svg';
import './App.scss';
import { useSelector } from "react-redux";
import { Product } from "../types/Product";
import { User } from "../types/User";
import classNames from "classnames";

interface State {
  shop: {
    wishlist: Product[];
    cart: Product[];
    user: User | null;
  };
}

export const Header = () => {
  const wishlist = useSelector((state: State) => state.shop.wishlist);
  const cart = useSelector((state: State) => state.shop.cart);
  const user = useSelector((state: State) => state.shop.user);

  return (
    <>
      <div className="upper">
        <span className="upper__info">
          <p className="upper__text">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <Link to={"/"} className="upper__link">ShopNow</Link>
        </span>
        <select name="lang" id="lang" defaultValue={'english'} className="upper__lang">
          <option value="english">English</option>
        </select>
      </div>
      <div className="header page__header" id="header">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__list__item">
              <Link to="/" className="nav__list__item__content">Home</Link>
            </li>
            <li className="nav__list__item">
              <Link to="/contact" className="nav__list__item__content">Contact</Link>
            </li>
            <li className="nav__list__item">
              <Link to="/about" className="nav__list__item__content">About</Link>
            </li>
            <li className="nav__list__item">
              <Link to="/signup" className="nav__list__item__content">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <div className="menu">
          <label htmlFor="search" className="search">
            <input type="text" id="search" placeholder="What are you looking for?" className="search__input"/>
            <span className="search__icon icon"></span>
          </label>
          <div className="menu__icons">
            <Link
              to="/wishlist"
              className={classNames("menu__fav icon", {
                "menu--full": wishlist.length > 0,
                })}
              data-content={wishlist.length}
            />
            <Link
              to="/cart"
              className={classNames("menu__cart icon", {
                "menu--full": cart.length > 0,
                })}
              data-content={cart.length}
            />
            {user && (
              <Link
                to="/account"
                className="menu__acc icon"
              />
            )}
          </div>
        </div>
      </div>
      <a href="#header" className="arrow-up"></a>
      <Outlet/>
    </>
  )
};
