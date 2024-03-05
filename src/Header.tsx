import { Outlet, Link } from "react-router-dom";
import logo from './images/Logo.svg';
import './App.scss';

export const Header = () => {
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
        <img src={logo} alt="logo" className="logo" />
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
            <a href="#" className="menu__fav icon"></a>
            <a href="#" className="menu__cart icon"></a>
            <a href="#" className="menu__acc icon"></a>
          </div>
        </div>
      </div>
      <a href="#header" className="arrow-up"></a>
      <Outlet/>
    </>
  )
};
