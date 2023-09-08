import user from '../../images/user.png';

import { memo } from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavItemImage = memo(() => {
  return (
    <ListGroup.Item
      as={NavLink}
      to="/settingAccount"
      className="Nav__item Nav__item--image border-0"
      variant="success"
    >
      <Image src={user} height={100} rounded></Image>
    </ListGroup.Item>
  );
});