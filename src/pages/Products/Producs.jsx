import { memo, useCallback, useEffect, useState } from 'react';
import { Container, FloatingLabel, Form, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { products, orders } from '../../api/app';
import { setOrders } from '../../features/OrdersSlice';
import { setProducts } from '../../features/ProductsSlice';

import './index.scss';

export const Products = memo(() => {
  const dispatch = useDispatch();
  const originalProducts = useSelector((state) => state.products.products);
  const ordersFromState = useSelector((state) => state.orders.orders);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(setProducts(products));
    dispatch(setOrders(orders));
  }, [dispatch, originalProducts]);

  const handleChange = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  let displayedProducts = originalProducts;

  if (query) {
    displayedProducts = originalProducts.filter(
      (product) => product.type === query
    );
  }

  return (
    <Container>
      <div className="SelectBlock">
        <h2>Продукты/ {displayedProducts.length}</h2>

        <FloatingLabel controlId="floatingSelect" label="Тип:">
          <Form.Select
            className="SelectBlock__select"
            value={query}
            onChange={handleChange}
            aria-label="type"
          >
            <option>Выберите тип</option>
            <option value="Monitors">Monitors</option>
            <option value="Tablet">Tablet</option>
            <option value="Phone">Phone</option>
          </Form.Select>
        </FloatingLabel>
      </div>

      {displayedProducts.map((item) => {
        const relatedOrder = ordersFromState.find(
          (order) => order.id === item.order
        );
        const orderTitle = relatedOrder
          ? relatedOrder.title
          : 'заказ не найден';

        return (
          <ListGroup horizontal key={item.id} className="Product m-3">
            <ListGroup.Item className="Product__block">
              <span>{item.title}</span>
              <span>{item.serialNumber}</span>
            </ListGroup.Item>
            <ListGroup.Item className="Product__block">
              <span>{item.guarantee.start}</span>
              <span>{item.guarantee.end}</span>
            </ListGroup.Item>
            <ListGroup.Item className="Product__block">
              {item.price.map((el) => (
                <span key={el.value}>
                  {el.value} {el.symbol}
                </span>
              ))}
            </ListGroup.Item>
            <ListGroup.Item className="Product__item">
              {orderTitle}
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </Container>
  );
});
// Название продукта, тип продукта,
//  даты гарантии в разных форматах, цена в разных валютах, Название
// прихода.
//
