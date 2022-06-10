import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

const Video = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Digital Innovation &amp; IT Services.</h1>
                <p>We guide, advise and suggest the best suitable financial solutions for indebted USA residents.</p>
                <div>
                    <Link to='/training' className='btn'>Hire Me</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Video