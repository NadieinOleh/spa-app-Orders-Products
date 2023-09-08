import { removeProduct } from '../../features/ProductsSlice';

import { RemoveButton } from '../Buttons/RemoveButton';

import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './index.scss';

export const MyModal = ({ productId, onHide, show }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="Modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Вы уверены, что хотите удалить этот приход?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {products.map((item) => {
          if (productId === item.id) {
            return (
              <div key={item.id}>
                <div>{item.title}</div>
                <div>{item.serialNumber}</div>
              </div>
            );
          }

          return null;
        })}
      </Modal.Body>
      <Modal.Footer className="Modal__footer">
        <Button variant="outline-success" onClick={onHide}>
          Отменить
        </Button>
        <Button
          variant="outline-danger"
          className="Modal__button Modal__button--block"
          onClick={() => {
            handleRemove(productId);
            onHide();
          }}
        >
          <RemoveButton />
          <span>Удалить</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
