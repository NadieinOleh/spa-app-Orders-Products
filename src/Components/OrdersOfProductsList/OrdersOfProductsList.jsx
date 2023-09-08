import { RemoveButton } from '../Buttons/RemoveButton';

import { memo } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const OrdersOfProductsList = memo(
  ({ orderId, setProductId, setModalShow }) => {
    const productsFromServer = useSelector((state) => state.products.products);

    return (
      <>
        {productsFromServer.map((item) => {
          if (item.order === orderId) {
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
                <ListGroup.Item className="Product__block Product__block--item">
                  <RemoveButton
                    showModal={setModalShow}
                    setProductId={() => setProductId(item.id)}
                  />
                </ListGroup.Item>
              </ListGroup>
            );
          }

          return null;
        })}
      </>
    );
  }
);
