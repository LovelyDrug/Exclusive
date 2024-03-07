import { FC } from "react";
import './About.scss';
import './App.scss';
import ellipseHollow from './images/icon-Ellipse-hollow.svg';
import ellipseFull from './images/icon-Ellipse-full.svg';
import { staff, money, services } from './Info';
import { MoneyCard } from "./MoneyCard";


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
        {money.map((item) => {
          return (
            <MoneyCard {...item} />
          );
        })}
      </div>
      <div className="about__block about__staff">
        <div className="about__staff__cards">
          {staff.map((person) => (
            <div className="about__staff__card">
              <img src={person.img}
                alt="person"
                className="about__staff__card__image"
              />
              <div className="about__staff__card__details">
                <div className="about__staff__card__text">
                  <h1 className="about__staff__card__name">{person.name}</h1>
                  <p className="about__staff__card__position">{person.position}</p>
                </div>
                <div className="about__staff__card__socials">
                  {person.socials.map((social) => (
                    <a href={social.link} className="about__staff__card__socials__link">
                      <img src={social.icon} alt={social.name} className="about__staff__card__socials__icon"/>
                    </a>
                  ))}
                </div>
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
        {services.map((service) => (
          <div className="about__points__point">
            <img
              src={service.icon}
              alt={service.title}
              className="about__points__point__icon"
            />
            <div className="about__points__titles">
              <h1 className="about__points__point__title">{service.title}</h1>
              <p className="about__points__point__subtitle">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}