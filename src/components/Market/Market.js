import React from 'react';
import './market.css';
import ProductForm from './ProductForm/ProductForm';
import ProductList from './ProductList/ProductList';

function Market() {
  return (
    <div className="market">
      <ProductList />
      <ProductForm />
    </div>
  );
}

export default Market;
