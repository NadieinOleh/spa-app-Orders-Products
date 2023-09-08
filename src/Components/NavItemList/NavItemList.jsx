import { memo } from 'react';
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const navTextArray = [
  'Приход',
  'Групы',
  'Продукты',
  'Пользователи',
  'Настройки',
];
const links = ['/orders', '/groups', '/products', '/users', '/settings'];

export const NavItemList = memo(() => {
  return navTextArray.map((item, index) => (
    <ListGroup.Item
      key={item}
      as={NavLink}
      to={links[index]}
      className="Nav__item border-0 p-4 "
      variant="success"
    >
      <div className="Nav__text">{item}</div>
    </ListGroup.Item>
  ));
});
