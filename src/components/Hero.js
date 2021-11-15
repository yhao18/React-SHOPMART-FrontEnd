import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={"https://i.ibb.co/hchC2WQ/banner.jpg"}
            alt="First slide"
            />
            <Carousel.Caption>
            
                <div className='container'>
                    <h1>Welcome to Shopmart</h1>
                    <p>Sign up for discount</p>
                    <Link to="/registration" className="btn btn-lg btn-primary">
                        Sign Up Today
                    </Link>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={"https://i.ibb.co/SXQ8DXr/books.jpg"}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Find Your Favorites Here</h3>
            <p>Find the world most popular books in best price.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={"https://i.ibb.co/MGQYpT1/toyCar.jpg"}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Place for Fun</h3>
            <p>We are providing attracting interesting stuffs all over the world.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default Hero
