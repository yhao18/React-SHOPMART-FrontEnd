import React from 'react'
import ProductItemCard from './ProductItemCard'


const ProductsListing = (props) => {




    return (
        <div className="container px-4 py-1">
            
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          
                {props.products.map((product, index) => (<ProductItemCard key={index} 
                id= {product._id} 
                title = {product.productName} 
                price = {product.productPrice} 
                image= {product.productPhoto} 
                category={product.productCategory}
                description={product.description} 
                bestseller={product.bestseller}/>))}
          
            </div>
        </div>
    )
}

export default ProductsListing
