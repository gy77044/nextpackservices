import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'

const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='WE ARE HIRING, JOIN US NOW!' text='We are Looking for Strong, Innovative Peoples with High Scalability &amp; adaptivity. Join US.' />
            <TrainingSection />
            <Footer />
        </div>
    )
}

export default Training