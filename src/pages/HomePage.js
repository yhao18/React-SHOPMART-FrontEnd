import React, {useEffect, useContext}from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoriesListing from '../components/CategoriesListing';
import ProductsListing from '../components/ProductsListing'
import Footer from '../components/Footer';
import productContext from '../context/ProductContext';

const HomePage = (props) => {

  const{products, setProducts} =useContext(productContext);

    useEffect(()=>{

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?bestseller=yes`)
          .then(response => response.json() )
          .then(json => {

            setProducts(json.data)
    
          })
          .catch(err => {
            console.log(`Error ${err}`);
          },[])   
      

      fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?featured=allCategories`)
          .then(response => response.json() )
          .then(json => {

            props.setCategories(json.data)
    
          })
          .catch(err => {
            console.log(`Error ${err}`);
          })   
      }, [])

    

        

    return (
        <div className="backGround">
            <Header/>
            <main>
                <Hero/>
          
                <CategoriesListing categories={props.categories}/>
                <h3 className="pb-2 border-bottom"> Best Seller</h3>
                <h3 className="pb-2 border-bottom mt-5 container"> Products</h3>
                <ProductsListing products = {products}/>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage

