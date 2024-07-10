import Navbar from "./Navbar";
import Footer1 from "./Footer1";
import "./ContactUs.css";
import logo from "./Images/logo1.png"
import React from 'react';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "afa2506f-8709-4a97-a32f-96a0ce4fe84a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (

    <>
    <div>
      <Navbar />
      <div className="naktelusu">
      <img src={logo} className="imagess"></img>
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <div className="topic">Address</div>
              <div className="text-one">CBIT College</div>
              <div className="text-two">Gandipet, HYDERABAD</div>
              <div className="text-three">TELANGANA, PIN : 500075</div>
            </div>
            <div className="phone details">
              <div className="topic">Phone</div>
              <div className="text-one">040-24193276</div>
              <div className="text-two">8466997201</div>
            </div>
            <div className="email details">
              <div className="topic">Email</div>
              <div className="text-one">principal@cbit.ac.in</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you.
            </p>
            <form onSubmit={onSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="off"
                  name="name"
                  required
                  
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your email"
                  autoComplete="off"
                  name="email"
                  required
                  
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your Message"
                  autoComplete="off"
                  name="message"
                  required
                  
                />
              </div>
              <div className="button">
                <input type="submit" defaultValue="Send Now"/>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer1 />
      </div>
    </>
  );
}
export default Contact;
