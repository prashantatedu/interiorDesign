import React, { useContext, useState } from "react";
import UserEntryContext from "../../context/UserEntry";
import "./InputForm.css";
import "./Signup.css";

const Signup = () => {
  const entryContext = useContext(UserEntryContext);

  let [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const getUserDetails = (authToken) => {
    console.log("in get user details :" + authToken);
  };

  const handleCloseSignUp = () => {
    console.log("SignIn Close");
    entryContext.dataDispatch({
      type: "UPDATESIGNUPSTATUS",
      showSignup: false,
    });
  };

  const inputValueChange = (ev) => {
    setUserData({ ...userData, [ev.target.id]: ev.target.value });
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="signup-content">
      <div className="form-header">
        <h1>Signup Form</h1>
        <span onClick={() => handleCloseSignUp()}>
          <i className="fas fa-times"></i>
        </span>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="user-sign-in">
        <div>
          <input
            className="userInput"
            type="text"
            id="name"
            value={userData.name}
            onChange={(e) => inputValueChange(e)}
            required
            placeholder="Name"
          />
        </div>
        <div>
          <input
            className="userInput"
            type="email"
            id="email"
            value={userData.email}
            onChange={(e) => inputValueChange(e)}
            required
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="userInput"
            type="password"
            id="password"
            value={userData.password}
            onChange={(e) => inputValueChange(e)}
            required
            placeholder="Password"
          />
        </div>
        <div>
          <input
            className="userInput"
            type="password"
            id="password2"
            value={userData.password2}
            onChange={(e) => inputValueChange(e)}
            required
            placeholder="Confirm Password"
          />
        </div>
        <input type="submit" className="submit-btn"></input>
      </form>
    </div>
  );
};

export default Signup;
