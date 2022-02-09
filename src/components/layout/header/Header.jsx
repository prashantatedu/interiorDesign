import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Signin from "../../auth/signinandout/Signin";
import Signup from "../../auth/signinandout/Signup";
import UserEntryContext from "../../context/UserEntry";
import Modal from "../../modal/Modal";
import "./Header.css";

const Header = () => {
  let [userEntryData, userEntryDispatch] = useReducer(EntryReducer, {
    showSignin: false,
    showSignup: false,
    showSignout: false,
  });

  const { showSignin, showSignup, showSignout } = userEntryData;

  const handleSignup = () => {
    userEntryDispatch({ type: "UPDATESIGNUPSTATUS", showSignup: true });
  };
  const handleSignin = () => {
    userEntryDispatch({ type: "UPDATESIGNINSTATUS", showSignin: true });
  };

  return (
    <header>
      <UserEntryContext.Provider
        value={{ data: userEntryData, dataDispatch: userEntryDispatch }}
      >
        {(showSignin && (
          <Modal>
            <Signin />
          </Modal>
        )) ||
          (showSignup && (
            <Modal>
              <Signup />
            </Modal>
          ))}

        <div className="left-btns">
          <Link to="/">
            <span>HOME</span>
            <i className="fas fa-home"></i>
          </Link>
        </div>
        <div className="right-btns">
          <Link to="/Signup" onClick={() => handleSignup()}>
            <span>Signup</span>
            <i className="fal fa-hiking"></i>
          </Link>
          <Link to="/Signin" onClick={() => handleSignin()}>
            <span>Signin</span>
            <i className="fas fa-walking"></i>
          </Link>
        </div>
      </UserEntryContext.Provider>
    </header>
  );
};

export default Header;

const EntryReducer = (state, action) => {
  switch (action.type) {
    case "UPDATESIGNINSTATUS":
      console.log("UPDATESIGNINSTATUS option");
      return {
        ...state,
        showSignin: action.showSignin,
        showSignup: false,
        showSignout: false,
      };
    case "UPDATESIGNUPSTATUS":
      console.log("UPDATESIGNUPSTATUS");
      return {
        ...state,
        showSignin: false,
        showSignup: action.showSignup,
        showSignout: false,
      };
    case "UPDATESIGNOUTSTATUS":
      console.log("UPDATESIGNOUTSTATUS");
      return {
        ...state,
        showSignin: false,
        showSignup: false,
        showSignout: action.showSignout,
      };
    default:
      return { ...state };
  }
};
