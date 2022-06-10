import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Advance -</h3>
                    <span className='bar'></span>
                    <p className='btc'>BPO Services</p>                    
                    <p>- While you concentrate on growing your business, we manage non-essential parts of your business and help you focus on core functions. -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Advance -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Crypto Asset Management</p>
                    <p>- Let the experts manage your crypto portfolio and pick the most profitable tokens for you. -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Advance -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Digital Marketing</p>
                    <p>- Digital Marketing is the component of marketing that utilizes the internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services. -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Advance -</h3>
                    <span className='bar'></span>
                    <p className='btc'>IT Services</p>                    
                    <p>- we provide all kinds of IT Services including Website Development, Mobile Application Development, software development, designing, secured hosting &amp; many more -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Advance -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Lead Generation</p>
                    <p>- We have the best Sales &amp; Lead generation services that may help your business grow by providing you with comprehensive sales and marketing support, helping you to identify, contact and market to potential customers. -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Advance -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Help &amp; Support</p>
                    <p>- These are similar to helpdesks which solve queries of the users through emails, voice chat, and the web. -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing