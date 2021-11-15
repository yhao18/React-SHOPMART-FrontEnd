import React, {useState} from 'react';
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import CategoryPage from '../pages/CategoryPage';
import RegistrationPage from '../pages/RegistrationPage'
import ProductDetailPage from '../pages/ProductDetailPage';
import ListingByCategoryPage from '../pages/ListingByCategoryPage';
import ProductContext from '../context/ProductContext';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const[products, setProducts] = useState([{}]);
  const[categories, setCategories] =useState([""]);

  return (
    <Router>

      <ProductContext.Provider value={{products, setProducts}}>
        <Routes>

          <Route exact path="/" 
          element = {<HomePage categories={categories} setCategories={setCategories}/>}/>

          <Route exact path="/products" 
          element = {<ProductListingPage />}/>

          <Route exact path="/categories" 
          element = {<CategoryPage categories={categories} setCategories={setCategories}/>}/>

          <Route exact path="/registration" 
          element={<RegistrationPage/>}/>

          <Route exact path="/products/:id" 
          element ={<ProductDetailPage/>}/>

          <Route exact path="/products/category/:category"
          element={<ListingByCategoryPage/>}/>


        </Routes>
      </ProductContext.Provider>
    </Router>
  );
}

export default App;
