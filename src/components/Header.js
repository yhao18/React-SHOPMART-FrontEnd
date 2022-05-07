import React, {useState}from 'react'
import {Link} from 'react-router-dom'

const header = () => {
    return (

      <header className="p-4 bg-dark text-white">
          <div className="container-lg">
            <div className="d-flex flex-wrap align-items-left justify-content-left justify-content-lg-start">
              <Link to="/" className="d-flex align-items-center   me-md-5 text-dark text-decoration-none">
                <img src={"https://i.ibb.co/6wkmfnT/logo.png"} width="45" height="45" className="bi me-2" alt=""/>
                <span className="fs-4 text-white h1">Shopmart</span>
                
              </Link>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-0 justify-content-left ">
                <li><Link to="/" className="nav-link px-2 text-white h4">Home</Link></li>
                <li><Link to="/categories" className="nav-link px-2 text-white h4">Categories</Link></li>
                <li><Link to="/products" className="nav-link px-2 text-white h4">Products</Link></li>

              </ul>

              {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input id="input" type="search" className="form-control form-control-dark" placeholder="Search product by ID..." aria-label="Search"/>
                
              </form> */}

              <div className="text-end">

              <Link to="/registration" className="btn btn-warning">Registration</Link>
              </div>
            </div>
          </div>
        </header>
    )
}

export default header
