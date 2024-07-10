import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Home.css";
import msft from "./Images/microsoft.png";
import cbit from "./Images/CBIT.jpg";
import amzn from "./Images/amazon.png";
import atos from "./Images/atos.png";
import arce from "./Images/arcesium.png";
import babycell from "./Images/babycell.png";
import abnd from "./Images/aurobindo.png";
import tcs from "./Images/tcs.png";
import tm from "./Images/im.png";
import infy from "./Images/infy.png";
import wipro from "./Images/wipro.png";
import logo1 from "./Images/logo1.png";
import ctc from "./Images/Cognizant.png";
import dll from "./Images/Delhivery.png";

function Home() { 
  return (
    <>
      <Navbar />
      <hr />
      <div className="HOIRA">
      <h1 className="Headingonly">OUR INSTITUTE</h1>
      <img src={cbit} className="imagessdsh"></img>
      <hr />
      <h1 className="Headingonly">INSTITUTE'S VISION</h1>
      <img src={logo1} className="imagessd"></img>
      <h3 className="Hello">
        Empowering Students with Industry-Relevant Skills and Cultivating
        Corporate Traits. Guiding Them Toward Bright Careers Infused with
        Professional Ethics.
      </h3>
      <hr />
      <h1 className="Headingonly">CBIT's Recruiters</h1>
      <br />
      <section className="Companies">
        <div className="Individual-Company">
          <img className="Image" src={msft} alt="Company-1" />
          <h3 className="Hello" >
            {" "}
            <br /> Microsoft Corporation
          </h3>
          <h4>Technology corporation </h4>
        </div>
        <div className="Individual-Company">
          <img className="Image" src={amzn} alt="Company-2" />
          <h3 className="Hello">
            {" "}
            <br /> Amazon
          </h3>
          <p> </p>
          <h4>E-commerce company </h4>
          <p />
        </div>
        <div className="Individual-Company">
          <img className="Image" src={atos} alt="Company-3" />
          <h3 className="Hello">
            {" "}
            <br /> Atos
          </h3>
          <p> </p>
          <h4>Information Technology Company </h4> <br />
          <p />
        </div>
        <div className="Individual-Company">
          <img className="Image" src={arce} alt="Company-4" />
          <h3 className="Hello">
            {" "}
            <br /> Arcesium
          </h3>
          <p> </p>
          <h4>Cloud Native Solutions</h4>
          <p />
        </div>
        <div className="Individual-Company">
          <img className="Image" src={babycell} alt="Company-5" />
          <h3 className="Hello">
            {" "}
            <br /> Babycell
          </h3>
          <p> </p>
          <h4>Health And Pharma </h4>
          <p />
        </div>
        <div className="Individual-Company">
          <img className="Image" src={abnd} alt="Company-6" />
          <h3 className="Hello">
            {" "}
            <br /> Aurobindo
          </h3>
          <p> </p>
          <h4>Pharma Manufacturer </h4>
          <p />
        </div>
        <div className="Individual-Company">
          <img className="Image" src={tcs} alt="Company-7" />
          <h3 className="Hello">
            {" "}
            <br /> Tata Consultancy Services
          </h3>
          <p> </p>
          <h4>Information Technology Company </h4> <p />
        </div>
        <div className="Individual-Company">
          <img className="Image" src={tm} alt="Company-8" />
          <h3 className="Hello">
            {" "}
            <br /> Tata Motors
          </h3>
          <p> </p>
          <h4>Automotive Company </h4>
          <p />
        </div>
        <div className="Individual-Company">
          <img className="Image" src={infy} alt="Company-9" />
          <h3 className="Hello">
            {" "}
            <br /> Infosys Ltd
          </h3>
          <p> </p>
          <h4>Information Technology Company </h4> <br />
          <p />
        </div>
        <div className="Individual-Company">
          <img className="Image" src={wipro} alt="Company-10" />
          <h3 className="Hello">
            {" "}
            <br /> Wipro Ltd
          </h3>
          <p> </p>
          <h4>Information Technology Company</h4>
          <p />
        </div>
        <div className="Individual-Company">
          <img className="Image" src={ctc} alt="Company-9" />
          <h3 className="Hello">
            {" "}
            <br /> Cognizant Ltd
          </h3>
          <p> </p>
          <h4>Information Technology Company </h4> <br />
          <p />
        </div>
        <div className="Individual-Company">
          <img className="Image" src={dll} alt="Company-10" />
          <h3 className="Hello">
            {" "}
            <br /> Delhivery Pvt Ltd
          </h3>
          <p> </p>
          <h4>Integrated Logistics</h4>
          <p />
        </div>
      </section>
      <hr />
      </div>
      <Footer />
    </>
  );
}
export default Home;
