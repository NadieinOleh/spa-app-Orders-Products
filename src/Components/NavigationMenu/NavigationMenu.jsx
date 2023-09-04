import { memo } from 'react';
import { ListGroup } from 'react-bootstrap';

import { NavItemImage } from '../NavItemImage';
import { NavItemList } from '../NavItemList';

import './index.scss';

export const NavigationMenu = memo(() => {
  return (
    <ListGroup className="Nav">
      <NavItemImage />
      <NavItemList />
    </ListGroup>
  );
});


