import React from 'react';
import './service-add.css'
import { useSelector, useDispatch } from "react-redux";
import { changeServiceField, addService, resetServiceFields, editService } from "../../../actions/actionCreators";

export default function ServiceAdd() {
  const { fields: item, edit } = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit.isEdit) {
      dispatch(editService(edit.id, item.name, item.price));
    } else {
      dispatch(addService(item.name, item.price));
    }
    dispatch(resetServiceFields());
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeServiceField(name, value));
  }

  const handleCancel = () => {
    dispatch(resetServiceFields());
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" >
        <input className="form__input form__input-name" name="name" onChange={handleChange} value={item.name} required />
        <input className="form__input form__input-price" name="price" onChange={handleChange} value={item.price} required />
      </label>
      <button className="btn btn__save" ><span className="btn__text" >Сохранить</span></button>
      {edit.isEdit && <button className="btn btn__cancel" onClick={handleCancel}>
        <span className="btn__text" >Отменить</span>
      </button>}
    </form>
  );
}
