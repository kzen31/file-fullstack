import React, { useContext } from "react";

import FooterLogo from "../assets/images/asalogo/loj.png";
import ASA from "../assets/images/LOGOASTRO.png";

const Footer = () => {
  return (
    <div>
      <section className="mailchimp-one">
        {/* <div className="container wow fadeInUp">
          <div className="inner-container">
            <div className="mailchimp-one__icon">
              <i className="apton-icon-mail"></i>
            </div>
            <form action="#" className="mailchimp-one__form">
              <input
                type="text"
                placeholder="Enter your email address"
                name="email"
              />
              <button className="thm-btn mailchimp-one__btn" type="submit">
                <span>Register Now</span>
              </button>
            </form>
          </div>
        </div> */}
      </section>

      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="footer-widget footer-widget__about text-center">
            <a href="/home">
              <img src={FooterLogo} width="150" alt="" />
            </a>
            <h4>Salam Kami Dengan Penuh Cinta</h4>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div className="container text-center">
            <p>© copyright 2022 by Lintas Orbit Jaya Tech</p>
          </div>
        </div>
      </footer >
    </div >
  );
};

export default Footer;
