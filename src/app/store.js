import { ordersSlice } from '../features/OrdersSlice';
import { productsSlice } from '../features/ProductsSlice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    orders: ordersSlice.reducer,
  },
});

