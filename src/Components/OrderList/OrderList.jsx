import { UitLeftIndent } from '../Buttons/UitLeftIndent';

import { UitRightIndent } from '../Buttons/UitRightIndent';

import { memo, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const OrderList = memo(({ 
  setOrderId,
  setShowProductList,
  getLenghtProducts,
}) => {
  const ordersFromServer = useSelector((state) => state.orders.orders);
  const products = useSelector((state) => state.products.products);
  

  const [clickedIndex, setClickedIndex] = useState(null);
  const [isShowItemList, setShowItemList] = useState(true);

  return (
    <div>
      {ordersFromServer.map((item, index) => (
        <ListGroup className="m-3 OrderList" horizontal key={item.id}>
          {isShowItemList && (
            <ListGroup.Item className="OrderList__item">
              {item.title}
            </ListGroup.Item>
          )}
          {isShowItemList && (
            <ListGroup.Item className="OrderList__block OrderList__item">
              <div>
                {item.date.slice(11, -3).split(':').reverse().join('/')}
              </div>
              <div>{item.date.slice(0, 10).split('-').reverse().join('/')}</div>
            </ListGroup.Item>
          )}
          {isShowItemList && (
            <ListGroup.Item className="OrderList__item">
              {getLenghtProducts(item.id, products)}
            </ListGroup.Item>
          )}

          <ListGroup.Item
            onClick={() => {
              setClickedIndex(clickedIndex === index ? null : index);
              setOrderId(item.id);
              setShowItemList((state) => !state);
              setShowProductList((state) => !state);
            }}
            className="OrderList__item OrderList__item--button"
          >
            {clickedIndex === index ? <UitLeftIndent /> : <UitRightIndent />}
          </ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
});
