import { memo, useCallback, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ProductList } from '../../Components/ProductList';
import { ProductSelect } from '../../Components/ProductSelect';

import './index.scss';

export const Products = memo(() => {
  const originalProducts = useSelector((state) => state.products.products);

  const [query, setQuery] = useState('');

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
      <ProductSelect
        handleChange={handleChange}
        displayedProducts={displayedProducts}
        query={query}
      />
      <ProductList displayedProducts={displayedProducts} />
    </Container>
  );
});

