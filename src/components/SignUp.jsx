import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="sign-up-page">
        <div>
          <h1><strong className="sign-up-heading">Sign up as</strong></h1>
        </div>
        <div className="sign-up-options">
          <Link
            className="btn btn-primary btn-with-space"
            to="/student"
            role="button"
          >
            Student
          </Link>
          <Link
            className="btn btn-primary btn-with-space"
            to="/admin"
            role="button"
          >
            Admin
          </Link>
        </div>

        <div>
          <p>
            Already signed up? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
