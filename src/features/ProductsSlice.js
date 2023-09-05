import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  length: 0,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload)
    },
  },
})


export const { setProducts, removeProduct, getLength } = productsSlice.actions;

export default productsSlice.reducer;