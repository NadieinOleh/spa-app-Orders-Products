import { ProductList } from '../../Components/ProductList';
import { ProductSelect } from '../../Components/ProductSelect';

import { memo, useCallback, useState } from 'react';

import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import './index.scss';

const Products = memo(() => {
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

export default Products;