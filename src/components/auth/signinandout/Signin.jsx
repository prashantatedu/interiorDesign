import React, { useState, useContext } from "react";
import "./Signin.css";
import "./InputForm.css";
import UserEntryContext from "../../context/UserEntry";

const Signin = () => {
  const entryContext = useContext(UserEntryContext);

  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = (e) => {
    console.log("SignIn");
    // e.preventDefault();
    // console.log("userData JSON Stringify: ", JSON.stringify(userData));
    // const url = "http://localhost:3001/auth";
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(userData),
    // };
    // fetch(url, requestOptions)
    //   .then((response) => {
    //     console.log(response.ok);
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       throw new Error("something went wrong");
    //     }
    //   })
    //   .then((data) => {
    //     localStorage.setItem("token", data.token);
    //     console.log(data.token);
    //     getUserDetails(data.token);
    //   })
    //   .catch((error) => {
    //     console.log("There was an error!", error);
    //   });

    // console.log("hello");
  };

  const getUserDetails = (authToken) => {
    console.log("in get user details :" + authToken);
    // const url = "http://localhost:3001/auth";
    // const requestOptions = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-auth-token": `${authToken}`,
    //   },
    // };
    // fetch(url, requestOptions)
    //   .then((response) => {
    //     console.log(response.ok);
    //     if (response.ok) {
    //       console.log("get request successful");
    //       return response.json();
    //     } else {
    //       throw new Error("something went wrong");
    //     }
    //   })
    //   .then((data) => {
    //     console.log("data :" + data.name);
    //     appContext.tfDispatch({
    //       type: "VERIFIEDUSER",
    //       isAuthenticated: true,
    //       name: data.name,
    //       isShowSignupON: false,
    //       isShowSignInON: false,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log("There was an error!", error);
    //   });
  };

  const handleCloseSignIn = () => {
    console.log("SignIn Close");
    entryContext.dataDispatch({
      type: "UPDATESIGNINSTATUS",
      showSignin: false,
    });
  };

  const inputValueChange = (ev) => {
    setUserData({ ...userData, [ev.target.id]: ev.target.value });
  };

  return (
    <div className="signin-content">
      <div className="form-header">
        <h1>Sign In</h1>
        <span onClick={() => handleCloseSignIn()}>
          <i className="fas fa-times"></i>
        </span>
      </div>
      <form className="user-sign-in">
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
        <button className="login-btn" onClick={(e) => handleSignIn(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
