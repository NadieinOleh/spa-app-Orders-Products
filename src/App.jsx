import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { NavigationMenu } from './Components/NavigationMenu';
import { TopMenu } from './Components/TopMenu';
import { Orders } from './pages/Orders';
import { Products } from './pages/Products';

function App() {

  return (
    <div className="App">
        <TopMenu />
        <div className="App__content">
          <div className="App__navigation-menu">
            <NavigationMenu />
          </div>
          <div className="App__main-content">
            <Routes>
              <Route path="/orders" element={<Orders />}/>
              <Route path="/groups" element={<p>groups</p>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/users" element={<p>users</p>}/>
              <Route path="/settings" element={<p>settings</p>}/>
            </Routes>
          </div>
        </div>

    </div>
  );
}

export default App;
