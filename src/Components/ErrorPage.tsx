import { FC } from "react";
import { Link } from "react-router-dom";
import './App.scss';

export const ErrorPage: FC = () => {
  return (
    <span className="error">
      <span className="error__text">
        <h1 className="error__title">404 Not Found</h1>
        <p className="error__subtitle">Your visited page not found. You may go home page.</p>
      </span>
      <Link to={'/'} className="button button-red">Back to home page</Link>
    </span>
  )
}