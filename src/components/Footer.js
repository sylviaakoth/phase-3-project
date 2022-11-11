import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <section className="footer-social-media">
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name"><br/>
               Developed by frontend developer
          </section>
          <section className="footer-info__returns">
            Returns Policy
            <br /><br />
            Delivery
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email"> <br/>
           Email: doctorappointment.info@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br /><br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number"><br />
           Call: 0700308204
          </section>
          <section className="footer-info__contact">
             My Health Awareness
            <br /><br />
            Contact Us
          </section>
        </section>
      </section>
      
    </section>
  )

}

export default Footer;