import { memo } from 'react';
import { Container } from 'react-bootstrap';
import { NavMenu } from '../NavMenu';

export const TopMenu = memo(() => {
  return (
    <Container fluid>
      <NavMenu />
    </Container>
  );
});