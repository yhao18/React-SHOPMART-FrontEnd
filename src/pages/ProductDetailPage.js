import React, {useState, useEffect} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router';

const ProductDetailPage = () => {
    const [product, setProduct] = useState({

        productName:"",
        productPhoto:"",
        productCategory:"",
        productPrice:0,
        description:""
        })

        const {id} = useParams();


        useEffect(()=>{

            fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/` + id) 
              .then(response => response.json() )
              .then(json => {

                 setProduct(json.data)
        
              })
              .catch(err => {
                console.log(`Error ${err}`);
              })
        
          }, []) 
          


    return (

        <div className="grid grid-row-3 backGround" id="main-container">
        <Header/>
        <br/>
            <section id="resort-description-section">
                <div className="container grid grid-col-4 grid-gap-2">
                    <div className = "image" >

                    <img src={product.productPhoto} id="detail" alt="" style={{ height: '40rem'}}/>
                    </div>
                    <div className="resort-description-content-area">
                    <br/>
                        <h2>{product.productName}</h2>
                        <hr/>
                        <h4>Price: </h4>
                        <h5>${product.productPrice} </h5>
                        <br/>
                        <h4>Category: </h4>
                        <h5>{product.productCategory} </h5>
                        <br/>
                        <h3>Details: </h3>
                        <h5>{product.description}</h5>
                    </div>
                </div>     
            </section>    
        
      <Footer/>
    </div>
            

    )
}

export default ProductDetailPage
