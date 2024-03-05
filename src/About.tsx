import { FC } from "react";
import './About.scss';
import './App.scss';
import ellipseHollow from './images/icon-Ellipse-hollow.svg';
import ellipseFull from './images/icon-Ellipse-full.svg';
import market from './images/Services-market.svg';
import money from './images/Services-money.svg';
import handbag from './images/Services-handbag.svg';
import savings from './images/Services-bag.svg';
import headphones from './images/Services-headphones.svg';
import shield from './images/Services-protection.svg';
import truck from './images/Services-truck.svg';
import staff from "./Info";


export const About: FC = () => {
  return (
    <div className="page__main about">
      <div className="about__block about__general">
        <div className="about__general__info">
          <h1 className="about__general__header">Our Story</h1>
          <p className="about__general__text">
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </p>
        </div>
      </div>
      <div className="about__block about__money">
        <div className="about__money__card">
          <img src={market} alt="market" className="about__money__card__image"/>
          <div className="about__money__card__titles">
            <h1 className="about__money__card__title">10.5k</h1>
            <p className="about__money__card__subtitle">Happy customers</p>
          </div>
        </div>
        <div className="about__money__card about__money__card--active">
          <img src={money} alt="money" className="about__money__card__image"/>
          <div className="about__money__card__titles">
            <h1 className="about__money__card__title">10.5k</h1>
            <p className="about__money__card__subtitle">Happy customers</p>
          </div>
        </div>
        <div className="about__money__card about__money__card--active">
          <img src={handbag} alt="handbag" className="about__money__card__image"/>
          <div className="about__money__card__titles">
            <h1 className="about__money__card__title">10.5k</h1>
            <p className="about__money__card__subtitle">Happy customers</p>
          </div>
        </div>
        <div className="about__money__card about__money__card--active">
          <img src={savings} alt="savings" className="about__money__card__image"/>
          <div className="about__money__card__titles">
            <h1 className="about__money__card__title">10.5k</h1>
            <p className="about__money__card__subtitle">Happy customers</p>
          </div>
        </div>
      </div>
      <div className="about__block about__staff">
        <div className="about__staff__cards">
          {staff.map((person) => (
            <div className="about__staff__card">
              <img src={person.img}
                alt="person"
                className="about__staff__card__image"
              />
              <h1 className="about__staff__card__name">{person.name}</h1>
              <p className="about__staff__card__title">{person.title}</p>
              <div className="about__staff__card__socials">
                {person.socials.map((social) => (
                  <a href={social.link} className="about__staff__card__socials__link">{social.name}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="about__staff__slide-pages">
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
      <div className="about__block about__points">
        <div className="about__points__item">
          <img src={truck} alt="truck" className="about__points__item__icon"/>
          <h1 className="about__points__item__header">24/7</h1>
          <p className="about__points__item__text">Support</p>
        </div>
        <div className="about__points__item">
          <img src={headphones} alt="headphones" className="about__points__item__icon"/>
          <h1 className="about__points__item__header">24/7</h1>
          <p className="about__points__item__text">Support</p>
        </div>
        <div className="about__points__item">
          <img src={shield} alt="shield" className="about__points__item__icon"/>
          <h1 className="about__points__item__header">24/7</h1>
          <p className="about__points__item__text">Support</p>
        </div>
      </div>
    </div>
  )
}