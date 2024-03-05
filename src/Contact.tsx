import { FC } from "react";
import './Contact.scss';
import phone from './images/Icon-Phone.svg';
import mail from './images/Icon-Mail.svg';

export const Contact: FC = () => {
  return (
    <div className="contacts">
      <div className="contacts__info">
        <div className="contacts__block contacts__block--call">
          <h1 className="contacts__block__header">
            <img src={phone} alt="red phone" />
            Call to us
          </h1>
          <div className="contacts__block__text">
            <p className="contacts__block__info">We are available 24/7, 7 days a week.</p>
            <p className="contacts__block__info">Phone: +8801611112222</p>
          </div>
        </div>
        <div className="contacts__block contacts__block--write">
          <h1 className="contacts__block__header">
            <img src={mail} alt="red mail" />
            Write to us
          </h1>
          <div className="contacts__block__text">
            <p className="contacts__block__info">Fill out our form and we will contact <br/> you within 24 hours.</p>
            <p className="contacts__block__info">Emails: customer@exclusive.com</p>
            <p className="contacts__block__info">Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>
        <form action="submit" className="contacts__form">
          <div className="contacts__form__personal-info">
            <input
              type="text"
              name="name"
              className="contacts__form__input"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="contacts__form__input"
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              name="name"
              className="contacts__form__input"
              placeholder="Your Phone"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="contacts__form__input contacts__form__textarea"
          />
          <button className="button button-red contacts__form__button">Sent Message</button>
        </form>
    </div>
  )
}