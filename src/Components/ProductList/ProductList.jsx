import { memo } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const ProductList = memo(({ displayedProducts }) => {
  const ordersFromState = useSelector((state) => state.orders.orders);

  return (
    <>
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
              <span>{`с ${item.guarantee.start}`}</span>
              <span>{`по ${item.guarantee.end}`}</span>
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
    </>
  );
});
