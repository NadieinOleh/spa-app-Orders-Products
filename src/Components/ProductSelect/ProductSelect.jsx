import { memo } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

export const ProductSelect = memo(({
  handleChange,
  displayedProducts,
  query
}) => {
  return (
    <div className="SelectBlock">
      <h2 className="m-3">Продукты/ {displayedProducts.length}</h2>

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
  );
});
