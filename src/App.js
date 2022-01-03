import { Fragment } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import CartPage from './pages/CartPage';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlist" element={<ProductListPage />} />
          <Route path="/productdetails" element={<ProductDetailsPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
