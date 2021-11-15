import React from 'react'
import Header from '../components/Header';
import RegistrationForm from '../components/RegistrationForm'
import Footer from '../components/Footer';

const ProductPage = () => {
    return (
        <div className="page">
        <Header/>
        <main className="body">
            <RegistrationForm />
        </main>
        <Footer />
    </div>
    )
}

export default ProductPage