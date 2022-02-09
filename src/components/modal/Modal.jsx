import React, { useContext, useRef } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import UserEntryContext from "../context/UserEntry";

const Modal = ({ children }) => {
  let ref = useRef(null);

  let entryContext = useContext(UserEntryContext);
  console.log("context data :", entryContext.userEntryData);

  const handleClose = (e) => {
    console.log("modal click", e.target);
    console.log("ref", ref.current);
    if (ref.current.contains(e.target)) {
      //skip closing
      console.log("skip closing");
    } else {
      console.log(" close modal");
      entryContext.dataDispatch({
        type: "UPDATESIGNINSTATUS",
        showSignin: false,
      });
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal" onClick={(e) => handleClose(e)}></div>
      <div className="main-content" ref={ref}>
        {children}
      </div>
    </div>,
    document.getElementById("modals")
  );
};

export default Modal;
