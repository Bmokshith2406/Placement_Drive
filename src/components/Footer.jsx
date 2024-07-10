import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-s">
          <div>
            <a className="Anchor" href="https://maps.app.goo.gl/ex8DF1E9V99uj1Py6" target="_blank" role="button">
              Locate us
            </a>
          </div>
          <div>
            <a className="Anchor" href="https://www.cbit.ac.in/" target="_blank" role="button">
              CBIT Website
            </a>
          </div>
          <div>
            <a className="Anchor" href="/contactus" target="_blank" role="button">
              Contact us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
