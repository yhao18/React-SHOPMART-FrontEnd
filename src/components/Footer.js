import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        
       
        <footer className="text-center text-lg-start bg-dark text-white">

            <div className="p-1 border-bottom"></div>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                
                        <div className="col-md-3 col-xl-3 mx-auto">

                            <Link to="/" className="mb-4 ">
                                <img src={"https://i.ibb.co/6wkmfnT/logo.png"} alt="" width="60" height="60"/>
                            </Link>
                            <span className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Shopmart
                            </span>
                            <p className="mt-4">
                                We're passionate about being the best. Contact us or come to store to find out more about us and enjoy best deals.
                            </p>
                        </div>               
                
                        <div className="col-md-4 col-xl-3 mx-auto mb-md-0">

                            <p className="text-uppercase fw-bold mb-3 mt-4">
                                Contact
                            </p>
                            <p>North York, ON M2J 5G3</p>
                            <p>
                                yhao18@myseneca.ca
                            </p>
                            <ul className="list-unstyled d-flex ">
                                <li className="ms-3"><a className="text-muted" href="https://twitter.com/">
                                    <img src={"https://i.ibb.co/MnGm2Qs/tw.png"} width="25" height="25" className="" alt=""/></a></li>
                                <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/">
                                <img src={"https://i.ibb.co/vPCdh9r/ins.png"} width="25" height="25" className="" alt=""/></a></li>
                                <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/">
                                    <img src={"https://i.ibb.co/1qBbjn9/facebook.png"} width="25" height="25" className="" alt=""/></a></li>
                            </ul>
                        </div>


                    </div>
                </div>
            </section>

            <div className="text-center p-4" >© 2021 Shopmart. Inc </div>

        </footer>

    )
}

export default Footer
