import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Register.css";
import { Navigate } from "react-router-dom";

function Register() {
  // React States
  const [errorMessages, setErrorMessages] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, nname, pass } = document.forms[0];

    const id = uname.value;
    const username = nname.value;
    const password = pass.value;
    // login func - gets the cookie
    (async () => {
      // register func
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          username,
          password,
        }),
      });
      const error = await response.json();
      console.log(error.message);
      setErrorMessages(error.message);
      if (error.message == "success") {
        setIsSubmitted(true);
      }
    })();
  };

  // error message
  const renderErrorMessage = () => <div className="error">{errorMessages}</div>;
  // login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Private Number </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="nname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage()}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="Register">
      <div className="Register-Form">
        <div className="title">Register</div>
        {isSubmitted ? <Navigate to="/login" /> : renderForm}
      </div>
      <div className="chat-body"></div>
    </div>
  );
}

export default Register;
