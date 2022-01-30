import React from 'react';
import './product-list.css'
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductList() {
  const list = useSelector((state) => state.productList);

  return (
    <div className="product-list__wrapper">
      <h2>Приглядитесь к этим предложениям</h2>
      <ul className="product-list">
        {list.map((item) =>
          <ProductItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
}
