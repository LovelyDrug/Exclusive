import { FC } from "react";
import './Footer.scss';
import './App.scss';
import logoWhite from './images/Logo-white.svg';
import qrcode from './images/Qrcode.svg';
import googlePlay from './images/GooglePlay.png';
import appStore from './images/AppStore.png';

export const Footer: FC = () => {
  return (
    <div className="footer page__footer">
      <div className="footer__info">
        <span className="table">
          <img
            src={logoWhite}
            alt="logo"
            className="logo logo-white"
          />
          <h1 className="table__name">Subscribe</h1>
          <p className="table__info">Get 10% off your first order</p>
          <input 
            type="email"
            name="subsciption"
            id="footerEmail"
            placeholder="Enter your email"
            className="table__email"
          />
        </span>
        <span className="table">
          <h1 className="table__name">Support</h1>
          <p className="table__info">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p className="table__info">exclusive@gmail.com</p>
          <p className="table__info">+88015-88888-9999</p>
        </span>
        <span className="table">
          <h1 className="table__name">Account</h1>
          <a href="account" className="table__info">My account</a>
          <a href="signup" className="table__info">Login / register</a>
          <a href="cart" className="table__info">Cart</a>
          <a href="wishlist" className="table__info">Wishlist</a>
          <a href="shop" className="table__info">Shop</a>
        </span>
        <span className="table">
          <h1 className="table__name">Quick Link</h1>
          <a href="" className="table__info">Privacy policy</a>
          <a href="" className="table__info">Tems of Use</a>
          <a href="" className="table__info">FAQ</a>
          <a href="" className="table__info">Contact</a>
        </span>
        <span className="table">
          <h1 className="table__name">Download App</h1>
          <div className="download">
            <img src={qrcode} alt="qrcode"/>
            <span className="download__markets">
              <img src={googlePlay} alt="googlePlay" />
              <img src={appStore} alt="appStore" />
            </span>
          </div>
          <div className="table__socials">
            <a href="https://www.facebook.com" className="icon icon-facebook"></a>
            <a href="https://twitter.com" className="icon icon-twitter"></a>
            <a href="https://www.instagram.com" className="icon icon-insta"></a>
            <a href="https://linkedin.com/" className="icon icon-linkedin"></a>
          </div>
        </span>
      </div>
      <div className="footer__copyright">
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  )
}