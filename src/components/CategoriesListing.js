import React from 'react'
import CategoryCard from './CategoryCard'


const CategoriesListing = (props) => {
    return (
        <div className="container px-4 py-5">
            <h3 className="pb-2 border-bottom"> {"Product Categories"}</h3>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
 
                {props.categories.map((category, index) => (<CategoryCard  key={index} title = {category} products ={props.products} setProducts={props.setProducts}/>))}
  
            </div>

        </div>     
    )
}

export default CategoriesListing
