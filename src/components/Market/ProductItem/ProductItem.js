import React from 'react';
import './product-item.css'
import PropTypes from 'prop-types';

export default function ProductItem({ item }) {
  return (
    <li className="product-item">
      <div className="product-item__image">
        <img src={item.image} alt={item.title} />{item.discount ?
          <div className="product-item__badge">
            {Math.round((1 - (item.discount / item.price)) * 100)}%
          </div>
          : null
        }
      </div>
      <div className="product-item__price">
        {item.discount ?
          <>
            {item.discount.toLocaleString()} ₽
            <span className="product-item__discount">{item.price.toLocaleString()} ₽</span>
          </>
          : `${item.price.toLocaleString()} ₽`}
      </div>
      <div className="product-item__title">
        <a className="product-item__link" href={'#task3'}>{item.title}</a>
      </div>
    </li>
  );
}

ProductItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
  }).isRequired,
}
