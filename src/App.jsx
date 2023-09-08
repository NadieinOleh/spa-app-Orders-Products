import './App.scss';

import Layout from './Components/Layout/Layout';
import { orders, products } from './api/app';

import { setOrders } from './features/OrdersSlice';
import { setProducts } from './features/ProductsSlice';

import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Products = lazy(() => import('./pages/Products/Products'));
const Orders = lazy(() => import('./pages/Orders/Orders'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOrders(orders));
    dispatch(setProducts(products));
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/orders" element={<Orders />} />
        <Route path="/groups" element={<p>groups</p>} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<p>users</p>} />
        <Route path="/settings" element={<p>settings</p>} />
      </Route>
    </Routes>
  );
}

export default App;
