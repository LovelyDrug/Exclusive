import { FC } from "react";
import { Product } from "./types/Product";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import './Wishlist.scss';
import { addToCart, removeFromWishlist } from "./redux/reducer";

interface State {
  shop: {
    wishlist: Product[];
    products: Product[];
    cart: Product[];
  };
}

export const Wishlist: FC = () => {
  const wishlist = useSelector((state: State) => state.shop.wishlist);
  const products = useSelector((state: State) => state.shop.products);
  const cart = useSelector((state: State) => state.shop.cart);
  const dispatch = useDispatch();

  console.log(wishlist);

  const addAllToCart = () => {
    wishlist.forEach((product) => {
      const productInCart = cart.find((item) => item.id === product.id);
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        dispatch(addToCart({ ...product, quantity: 1 }));
      }

      dispatch(removeFromWishlist(product));
    });
  }

  return (
    <div className="page__main wishlist">
      <div className="wishlist__block">
        <h1 className="wishlist__header">
          <p>Wishlist {`(${wishlist.length})`}</p>
          <button
            className="button button-white wishlist__addAll"
            onClick={() => addAllToCart()}
          >
            Move all to bag
          </button>
        </h1>
        <div className="wishlist__products">
          {wishlist.length > 0 ? wishlist.map((product) => (
            <Card
              card={product}
              place="card--wishlist"
              key={product.id}
            />
          ))
          : <p className="wishlist__empty">Your wishlist is empty</p>}
        </div>
      </div>
      <div className="wishlist__block">
        <h1 className="wishlist__header">
          <p className="wishlist__title">
            <div className="block__rectangle"></div>
            Just for you
          </p>
          <button className="button button-white wishlist__seeAll">see all</button>
        </h1>
        <div className="wishlist__products">
          {products.slice(1, 5).map((product) => ( 
            <Card
              card={product}
              place="card--justForYou"
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}