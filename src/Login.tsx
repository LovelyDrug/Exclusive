import { FC } from "react";
import './App.scss'

export const Login: FC = () => {
  return (
    <div className="form page__main">
      <div className="form__image"></div>
      <form action="submit" className="form__form">
        <span className="form__text">
          <h1 className="form__title">Log In to Exclusive</h1>
          <p className="form__subtitle">Enter your details below</p>
        </span>
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
        <span className="form__buttons">
          <button type="submit" className="button button-red">Log In</button>
          <a href='/' className="form__forgot">Forgot Password?</a>
        </span>
      </form>
    </div>
  )
}