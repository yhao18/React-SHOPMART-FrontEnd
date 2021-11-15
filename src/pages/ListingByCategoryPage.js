
import React, {useEffect, useContext}from 'react'
import Header from '../components/Header';
import ProductsListing from '../components/ProductsListing'
import Footer from '../components/Footer';
import { useParams } from 'react-router';
import productContext from '../context/ProductContext';

const ListingByCategoryPage = () => {
  const{products, setProducts} =useContext(productContext);

    const {category} = useParams();

    useEffect(()=>{

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/category/` + category)
          .then(response => response.json() )
          .then(json => {

            setProducts(json.data)

          })
          .catch(err => {
            console.log(`Error ${err}`);
          })    
      }, []) 
      

    return (
        <div >
        <Header/>
        <main >
        <h3 className="pb-2 border-bottom mt-5 container"> {category}</h3>
        <ProductsListing products={products}/>

        </main>
        <Footer/>
    </div>
    )
}

export default ListingByCategoryPage
