import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <>
    <div className="footer-container">
        <div className="left-side">
            <div className="title1"><a className="navbar-brand" href="/">Logic Master</a></div>
            <div className="social-links">
                <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="2x" className='icon'/>
                </a>
                <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} size="2x" className='icon' />
                </a>
                <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='icon' />
                </a>
            </div>
            <div className="contact-details">
                <a href="mailto:logicmaster@gmail.com">logicmaster@gmail.com</a>
            </div>
        </div>
            <div className="right-side">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223993.66732182703!2d76.9252291985414!3d28.692606365723123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1694464252225!5m2!1sen!2sin"
                
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
        </div>
    </div>
    <p className='rights'>&copy; {new Date().getFullYear()} Logic Master. All rights reserved.</p>
    </>
  )
}

export default Footer