import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';


const CategoryCard = (props) => {

 

   const getImage=()=>{
     if(props.title ==="Book"){
       return "https://i.ibb.co/smJ1vNY/Book.jpg"
     }else if(props.title ==="Video Games"){
       return "https://i.ibb.co/vB6Mhd5/Video-Games.jpg"
     }else if(props.title ==="Office Products"){
       return "https://i.ibb.co/8dQT3Mh/Office-Products.jpg"
     }else if(props.title ==="Toy"){
       return "https://i.ibb.co/w6MgBWT/Teddy-bear-in-box-vintage-tone.jpg"
     }else{
       return "https://i.ibb.co/6wkmfnT/logo.png"
     }
   }

    
    return (
        <Card style={{ width: '20rem'}} className=" mx-auto ">
            <Link to = {`/products/category/${props.title}`} variant="primary" className="links">
            <Card.Img variant="top" style={{ height: '20rem' }} className="" src={getImage()} alt=""/>
            <Card.Body>
                <Card.Title className="text-dark h4">{props.title}</Card.Title>     
            </Card.Body>
            </Link> 
        </Card>
    )
}

export default CategoryCard
