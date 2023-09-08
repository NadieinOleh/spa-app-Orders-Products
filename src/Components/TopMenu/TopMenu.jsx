import { NavMenu } from '../NavMenu';

import { memo } from 'react';
import { Container } from 'react-bootstrap';

export const TopMenu = memo(() => {
  return (
    <Container fluid>
      <NavMenu />
    </Container>
  );
});
