import { FC } from "react";
import { useSelector } from "react-redux";
import './Account.scss';

interface State {
  shop: {
    user: {
      name: string;
      email: string;
      phone: string;
      password: string;
      address: string;
    };
  };
}

export const Account: FC = () => {
  const user = useSelector((state: State) => state.shop.user);

  return (
    <div className="page__main account">
      <div className="account__header">
        <p className="account__road">
          Home / My Account
        </p>
        <div className="account__title">
          Welcome! 
          <p className="account__title__user">{user.name}</p>
        </div>
      </div>
      <div className="account__blocks">
        <div className="account__sidebar">
          <h3 className="account__sidebar__title">Manage My Account</h3>
          <ul className="account__sidebar__list">
            <li className="account__sidebar__item account__sidebar__item--active">My Profile</li>
            <li className="account__sidebar__item">Address Book</li>
            <li className="account__sidebar__item">My Payment Options</li>
          </ul>
          <h3 className="account__sidebar__title">My Orders</h3>
          <ul className="account__sidebar__list">
            <li className="account__sidebar__item">My Returns</li>
            <li className="account__sidebar__item">My Cancellations</li>
          </ul>
          <h3 className="account__sidebar__title">My WishList</h3>
        </div>
        <div className="account__edit">
          <h1 className="account__edit__title">Edit your profile</h1>
          <form className="account__edit__form">
            <div className="account__edit__info">
              <div className="account__edit__item">
                <label htmlFor="firstName" className="account__edit__label">first Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="account__edit__input input"
                  placeholder={user.name.split(' ')[0]}
                />
              </div>
              <div className="account__edit__item">
                <label htmlFor="lastName" className="account__edit__label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="account__edit__input input"
                  placeholder={user.name.split(' ')[1]}
                />
              </div>
              <div className="account__edit__item">
                <label htmlFor="email" className="account__edit__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="account__edit__input input"
                  placeholder={user.email}
                />
              </div>
              <div className="account__edit__item">
                <label htmlFor="address" className="account__edit__label">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="account__edit__input input"
                  placeholder={user.address}
                />
              </div>
            </div>
            <div className="account__edit__passwords">
              <p className="account__edit__passwords__title">password changes</p>
              <div className="account__edit__item">
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  className="account__edit__input input"
                  placeholder="Current password"
                />
              </div>
              <div className="account__edit__item">
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className="account__edit__input input"
                  placeholder="New password"
                />
              </div>
              <div className="account__edit__item input">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="account__edit__input input"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
            <div className="account__edit__buttons">
              <button className="button button-white account__button">Cancel</button>
              <button className="button button-red account__button">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}