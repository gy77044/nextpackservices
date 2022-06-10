import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='OUR SERVICES.' text='We provide a wide range of services including varied financial services, lead generation, IT Services, and many more.' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing