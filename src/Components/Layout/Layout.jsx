import { NavigationMenu } from '../NavigationMenu';
import { TopMenu } from '../TopMenu';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';

const Layout = () => {
  const styleForSpinner = {
    height: '80px',
    width: '80px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    translate: 'transform(-50%, -50%)',
  };

  return (
    <div className="App">
      <header>
        <TopMenu />
      </header>

      <div className="App__content">
        <div className="App__navigation-menu">
          <NavigationMenu />
        </div>
        <div className="App__main-content">
          <Suspense
            fallback={
              <Spinner
                animation="grow"
                variant="success"
                style={styleForSpinner}
              />
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
