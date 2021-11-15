import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductItemCard = (props) => {
    return (
        <Card style={{ width: '25rem' }} className="feature col card-grid mx-auto">
            <Card.Img variant="top" src={props.image} style={{ height: '22rem' }}/>
            <Card.Body className="card card-shadow">
                <Card.Title>{props.title}</Card.Title> 
                <span className={props.bestseller===true?"card-text bestseller fw-bold":"hide"}>Best Seller</span>
                <p className="card-text">Price: ${props.price}</p>
                
                <p className="card-text">Category: {props.category}</p>
                
                <Link to = {`/products/${props.id}`} variant="primary"> 
                    <Button variant="primary">Check Detail</Button>
                </Link> 
            </Card.Body>
        </Card>
    )
}

export default ProductItemCard
