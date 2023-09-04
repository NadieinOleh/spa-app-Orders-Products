import { memo } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const Orders = memo(() => {
  const orders = useSelector(state => state.orders.orders);

  console.log(orders.product);

  return (
    <Container>
      <h1>oleh</h1>
    </Container>
  );
});
