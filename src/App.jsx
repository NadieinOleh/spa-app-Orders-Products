 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { TopMenu } from './Components/TopMenu';


function App() {
  return (
    <div className="App">
      <TopMenu />
      <Routes>
        {/* <Route path="/" element={<h1>hello</h1>}></Route> */}
      </Routes>
    </div>
  );
}


export default App;
