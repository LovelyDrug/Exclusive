import { FC } from "react";
import './App.scss'
import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducer";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    dispatch(setUser({
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }));
    form.reset();
    navigate('/');
  }

  return (
    <div className="form page__main">
      <div className="form__image"></div>
      <form
        action="submit"
        className="form__form"
        onSubmit={handleSubmit}
      >
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