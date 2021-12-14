import { Fragment } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';

function App() {
  return (
    <div className="App">
      <Fragment>
         {/* <HomePage /> */}
         <ProductListPage />
      </Fragment>
    </div>
  );
}

export default App;
