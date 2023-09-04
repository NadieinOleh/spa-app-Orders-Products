import { configureStore } from '@reduxjs/toolkit'
import { ordersSlice } from '../features/OrdersSlice'
import { productsSlice } from '../features/ProductsSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    orders: ordersSlice.reducer,
  },
})

