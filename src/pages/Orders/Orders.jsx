import { memo, useCallback, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { MyModal } from '../../Components/MyModal/MyModal';
import { OrderList } from '../../Components/OrderList';
import { OrdersOfProductsList } from '../../Components/OrdersOfProductsList';

import './index.scss';

export const Orders = memo(() => {
  const ordersFromServer = useSelector((state) => state.orders.orders);
  const [orderId, setOrderId] = useState(null);
  const [productId, setProductId] = useState(null);
  const [isShowProductList, setShowProductList] = useState(false);
  const [isModalShow, setModalShow] = useState(false);

  const getLenghtProducts = useCallback((id, productsFromServer) => {
   return productsFromServer.filter(item => item.order === id).length;
  }, [])

  return (
    <Container>
      <h2 className="m-3">Приходы/ {ordersFromServer.length}</h2>

      <div className="d-flex">
        <OrderList
          setOrderId={setOrderId}
          setShowProductList={setShowProductList}
          getLenghtProducts={getLenghtProducts}
        />

        {orderId && isShowProductList && (
          <div>
            <OrdersOfProductsList
              orderId={orderId}
              setProductId={setProductId}
              setModalShow={setModalShow}
            />
          </div>
        )}
      </div>

      <MyModal
        productId={productId}
        show={isModalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
});
