import React from 'react';
import './service-list.css'
import { useSelector, useDispatch } from "react-redux";
import { removeService, changeServiceField, changeEditableServiceFields, deleteEditableServiceFields } from "../../../actions/actionCreators";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const filter = useSelector((state) => state.serviceFilter);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    return () => {
      dispatch(removeService(id));
      dispatch(deleteEditableServiceFields(id));
      dispatch(changeServiceField('name', ''));
      dispatch(changeServiceField('price', ''));
    }
  }

  const handleEdit = (id) => {
    return () => {
      const item = items.find((item) => item.id === id);
      dispatch(changeServiceField('name', item.name));
      dispatch(changeServiceField('price', item.price));
      dispatch(changeEditableServiceFields(item.id));
    }
  }

  return (
    <ul>
      {items.filter((item) => item.name.includes(filter))
        .map((item) =>
          <li className="service-list__item" key={item.id}>
            {item.name} - {item.price}
            <div className="btn__box" >
              <button className="btn btn__edit" onClick={handleEdit(item.id)}><span className="_hidden" >Редактировать</span></button>
              <button className="btn btn__remove" onClick={handleRemove(item.id)}><span className="_hidden" >Удалить</span></button>
            </div>
          </li>
        )}
    </ul>
  );
}