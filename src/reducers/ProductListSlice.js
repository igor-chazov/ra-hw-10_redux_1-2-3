import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  { id: nanoid(), title: 'Беспроводное зарядное устройство MagSafe для Apple iPhone с возможностью беспроводной зарядки', price: 3998, discount: 1999, image: `https://placeimg.com/150/150/tech?${nanoid(5)}` },
  { id: nanoid(), title: 'Смартфон Samsung Galaxy A52 8/256 ГБ, черный', price: 28999, discount: 0, image: `https://placeimg.com/150/150/tech?${nanoid(5)}` },
  { id: nanoid(), title: 'Смартфон Xiaomi 11T 8/256 ГБ RU, голубой', price: 50999, discount: 40590, image: `https://placeimg.com/150/150/tech?${nanoid(5)}` },
  { id: nanoid(), title: 'Чехол-накладка Apple MagSafe силиконовый для iPhone 12/iPhone 12 Pro красный', price: 4290, discount: 0, image: `https://placeimg.com/150/150/tech?${nanoid(5)}` },
];

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    addProduct(state, action) {
      console.log({ state, action });
      const { title, price, discount, image, } = action.payload;
      return [...state, { id: nanoid(), title, price: Number(price), discount: Number(discount), image, }];
    },
  },
});

export const { addProduct } = productListSlice.actions;
export default productListSlice.reducer;
