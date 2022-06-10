import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/ng.JPG'
import Moon from '../assets/nww.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>About Us</h1>
                <p>We guide, advise and suggest the best suitable financial solutions for indebted USA residents, who have been finding it difficult to manage their income and expenses, because of the unsecured debts they have and they have been making heavy monthly repayments, which include the heavy interest payments and other charges too.

Altogether it becomes a heavy undue liability and mostly, because of this, it leaves the person into a hand-to-mouth situation or sometimes even worse than that.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training