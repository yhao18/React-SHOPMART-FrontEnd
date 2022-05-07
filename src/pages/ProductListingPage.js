import React, {useState, useEffect, useContext}from 'react'
import Header from '../components/Header';
import ProductsListing from '../components/ProductsListing'
import Footer from '../components/Footer';
import PaginationPart from '../components/PaginationPart';
import productContext from '../context/ProductContext';

const ProductListingPage = () => {

    const{products, setProducts} =useContext(productContext);
    const [currentPage, setCurrentPage] = useState(1); 
    

    useEffect(()=>{

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products`)
          .then(response => response.json() )
          .then(json => {

            setProducts(json.data)
    
          })
          .catch(err => {
            console.log(`Error ${err}`);
          })    
      }, []) 
      
      const productsPerPage =12;
      const indexOfLastProduct= currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

      const paginate=(pageNumber)=> setCurrentPage(pageNumber)

    return (
        <div className="backGround">
        <Header/>
        <main >
            <ProductsListing products={currentProducts}/>
            
            <PaginationPart postPerPage={productsPerPage} 
                            totalPost={products.length}
                            paginate ={paginate}/>
        </main>
        <Footer/>
    </div>
    )
}

export default ProductListingPage
