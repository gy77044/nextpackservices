import React from 'react';
import './FooterStyles.css';
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation
              size={20}
              style={{ color: '#ffffff', marginRight: '2rem' }}
            />
            <div>
              <p>J1/1, KDMA road, near President Hotel, Awas Vikas.</p>
              <h4>Kanpur, Uttar Pradesh 208019</h4>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />{' '}
              +91 7007974483
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />{' '}
              Info@nextpactservices.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About the company</h4>
          <p>
            We guide, advise and suggest the best suitable financial solutions
            for indebted USA residents, who have been finding it difficult to
            manage their income and expenses, because of the unsecured debts
            they have and they have been making heavy monthly repayments, which
            include the heavy interest payments and other charges too.
          </p>
          <div className='social'>
            <FaFacebook
              size={30}
              style={{ color: '#ffffff', marginRight: '1rem' }}
            />
            <FaTwitter
              size={30}
              style={{ color: '#ffffff', marginRight: '1rem' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: '#ffffff', marginRight: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
