import { Fragment } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <Fragment>
         {/* <HomePage /> */}
         {/* <ProductListPage /> */}
         <ProductDetailsPage />
      </Fragment>
    </div>
  );
}

export default App;
