import { memo } from 'react';
import { Form, Image } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/download.png';
import { DateComponent } from '../Date/Date';

import './index.scss';

export const NavMenu = memo(() => {
  return (
    <Navbar expand="lg" className="NavMenu">
      <div className="NavMenu__investory">
        <Navbar.Brand className="NavMenu__brand">
          <Image src={logo} alt="investory icon" height={30} />
          <h1 className="NavMenu__title">INVENTORY</h1>
        </Navbar.Brand>

        <Form>
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </Form>
      </div>

      <DateComponent />
    </Navbar>
  );
});
