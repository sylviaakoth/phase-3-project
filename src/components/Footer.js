import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <div className="footer">
      
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
               Developed by frontend developer
          </section>
          <section className="footer-info__returns">
            Returns Policy
            <br />
            Delivery
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
           Email: doctorappointment.info@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
           Call: 0700308204
          </section>
          <section className="footer-info__contact">
             My Health Awareness
            <br />
            Contact Us
          </section>
        </section>
      </section>
      
    </div>
  )

}

export default Footer;