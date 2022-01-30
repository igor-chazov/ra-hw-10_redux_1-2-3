import React from 'react';
import './product-form.css'
import { useSelector, useDispatch } from "react-redux";
import { changeProductForm, resetProductForm } from "../../../reducers/ProductFormSlice";
import { addProduct } from "../../../reducers/ProductListSlice";

export default function ProductForm() {
  const form = useSelector((state) => state.productForm);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form.title);
    dispatch(addProduct(
      { title: form.title, price: form.price, discount: form.discount, image: form.image, }
    ));
    dispatch(resetProductForm());
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeProductForm({ name, value }));
  }

  const handleReset = () => {
    dispatch(resetProductForm());
  }

  return (
    <div className="form-wrapper">
      <form className="form__product product-form" onSubmit={handleSubmit}>
        <label htmlFor="title" className='product-form__label' >Название товара</label>
        <input className="product-form__input" id="title" name="title" onChange={handleChange} value={form.title} required />
        <label htmlFor="price" className="product-form__label">Цена</label>
        <input className="product-form__input" id="price" name="price" onChange={handleChange} value={form.price} required />
        <label htmlFor="discount" className="product-form__label">Цена со скидкой</label>
        <input className="product-form__input" id="discount" name="discount" onChange={handleChange} value={form.discount} />
        <label htmlFor="image" className="product-form__label">Ссылка на фото товара</label>
        <input className="product-form__input" id="image" name="image" onChange={handleChange} value={form.image} required />
        <div className="product-form__controls">
          <button className='btn btn__add' type="submit">Добавить</button>
          <button className='btn btn__reset' type="reset" onClick={handleReset}>Сбросить</button>
        </div>
      </form>
    </div>
  )
}
