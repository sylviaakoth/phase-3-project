import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <section className="footer">
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            <h6> Location</h6>
            Kenya Headquaters:<br></br>
            1150 Nairobi , Fort Lee, <br></br>
            NJ 070224888.<br></br>
            LANGATE.
          </section>
          <section className="footer-info__returns">
            <h6> Case studies</h6>
            Simplifying Data intergration in Healthcare.<br></br>
          </section>
          </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            {" "}
            <br />
            <h6> Our brands</h6>
            Software modernization by Modologix,<br></br>
            Cloud Solutions by imagis.
          </section>
          <section className="footer-info__terms">
            <h6> Quick Links</h6>
            About<br></br>
            Gender<br></br>
          </section>
        </section>
        <section className="footer-info__number">
          <br />
          <h6> Resource Center</h6>
          Doctor Appointment application<br></br>
          News / Bulletins<br></br>
          Downloads<br></br>
          Careers
        </section>
      </section>
    </section>
  );
}
export default Footer;