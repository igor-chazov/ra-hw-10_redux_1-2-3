import { configureStore } from "@reduxjs/toolkit";

import serviceListReducer from '../reducers/serviceList';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceFilterReducer from '../reducers/serviceFilter';

import productFormReducer from "../reducers/ProductFormSlice";
import productListReducer from "../reducers/ProductListSlice";

export default configureStore({
  reducer: {
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
    serviceFilter: serviceFilterReducer,

    productForm: productFormReducer,
    productList: productListReducer,
  }
})
