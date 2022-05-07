import React, {useEffect}from 'react'
import Header from '../components/Header';
import CategoriesListing from '../components/CategoriesListing';
import Footer from '../components/Footer';

const CategoryPage = (props) => {

    useEffect(()=>{

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
            <main >
          
                <CategoriesListing categories={props.categories}/>
            </main>
            <Footer/>
        </div>
    )
}

export default CategoryPage
