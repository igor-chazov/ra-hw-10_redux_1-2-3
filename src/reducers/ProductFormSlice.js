import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  title: '',
  price: '',
  discount: '',
  image: `https://placeimg.com/150/150/tech?${nanoid(5)}`,
}

export const productFormSlice = createSlice({
  name: 'productForm',
  initialState,
  reducers: {
    changeProductForm(state, action) {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    },
    resetProductForm() {
      return initialState;
    },
  },
});

export const { changeProductForm, resetProductForm } = productFormSlice.actions;
export default productFormSlice.reducer;
