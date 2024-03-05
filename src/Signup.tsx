import { FC } from "react";
import './App.scss'
import google from './images/Icon-Google.svg';

export const Signup: FC = () => {
  return (
    <div className="form page__main">
      <div className="form__image"></div>
      <form action="submit" className="form__form">
        <span className="form__text">
          <h1 className="form__title">Create an account</h1>
          <p className="form__subtitle">Enter your details below</p>
        </span>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="form__input"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="form__input"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="form__input"
        />
        <span className="form__signup-buttons">
          <button type="submit" className="button button-red">Create Account</button>
          <button className="button form__button-google">
            <img src={google} alt="google" />
            Sign up with Google
          </button>
        </span>
        <span className="form__linkToLogin">
          <p>Already have account?</p>
          <a href="/login" className="form__link">Log in</a>
        </span>
      </form>
    </div>
  )
}