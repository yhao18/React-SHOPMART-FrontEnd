import React from 'react'
import {Link} from 'react-router-dom'

const header = () => {
    return (

      <header className="p-3 bg-dark text-white">
          <div className="container-lg">
            <div className="d-flex flex-wrap align-items-left justify-content-left justify-content-lg-start">
              <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img src={"https://i.ibb.co/6wkmfnT/logo.png"} width="45" height="45" className="bi me-2" alt=""/>
                <span className="fs-4 text-white h3">Shopmart</span>
                
              </Link>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/" className="nav-link px-2 text-white h4">Home</Link></li>
                <li><Link to="/products" className="nav-link px-2 text-white h4">Products</Link></li>
                <li><Link to="/categories" className="nav-link px-2 text-white h4">Categories</Link></li>
                <li><Link to="/registration" className="nav-link px-2 text-white h4">Registration</Link></li>
              </ul>

              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control form-control-dark" placeholder="Search product by ID..." aria-label="Search"/>
              </form>

              <div className="text-end">
                <button type="button" className="btn btn-warning">Search</button>
              </div>
            </div>
          </div>
        </header>
    )
}

export default header
