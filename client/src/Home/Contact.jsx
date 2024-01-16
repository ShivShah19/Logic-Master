import React from 'react'
import contactimage from '../image/contact 2.png'

const Contact = () => {
  return (
    <>
    <a name="contact"></a>
    <section className="contact">
        <div className="join-container">
            <div className="join-image">
                <img src={contactimage} alt="Sign Image" />
            </div>
            <div className="join-content">
                <h2 className="join-heading">CONNECT WITH US</h2>
                <form action="#" className="join-form" >
                    <div className="input-group">
                        <input type="text" id="join-name"  className="form-control" placeholder="First Name*" required />
                        <input type="text" id="join-name" className="form-control" placeholder="Last Name*" required />
                    </div>
                    <div className="input-group">
                        <input type="email" id="join-email" className="form-control" placeholder="Enter Your Email Address*" required />
                    </div>
                    <textarea name="message"  className="form-control " cols="30" rows="5" placeholder="Your Message"></textarea>
                    <button className="join-button">SEND</button>
                </form>
            </div>
            
        </div>
    </section>
    
    </>
  )
}

export default Contact