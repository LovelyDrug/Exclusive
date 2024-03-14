import React, { useEffect } from 'react';
import './ProductPage.scss';
import { Product } from './types/Product';
import { useSelector } from 'react-redux';

interface State {
  shop: {
    products: Product[];
  };
}

export const ProductPage: React.FC = () => {
  const products = useSelector((state: State) => state.shop.products);
  const id = window.location.pathname.split('/').pop();

  const backupProduct = {
    id: 0,
    name: 'Product not found',
    price: 0,
    photo: '',
  };

  const currentProduct = products.find((product) => product.id.toString() === id) || backupProduct;

  return (
    <div>
      <img src={currentProduct.photo} alt={currentProduct.name} />
      <h3>{currentProduct.name}</h3>
      <p>${currentProduct.price}</p>
    </div>
  );
};
