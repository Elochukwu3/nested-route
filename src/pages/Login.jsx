import React, { useState, useRef } from "react";
import { useAuthentication } from "../auth";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Sign.css";

export default function Login({ formHeader }) {
  const refDiv = useRef(null);
  const [logDetails, setLoginDetails] = useState({ passcode: "", emal: "" });
  const changeValue = (e) => {
    setLoginDetails({
      ...logDetails,
      [e.target.name]: e.target.value,
    });
  };

  let savedPassword = JSON.parse(localStorage.getItem(logDetails.passcode));
  const { logIn } = useAuthentication(); //destructuring of login provided by the createContext api
  const navigate = useNavigate(); //for navigation provided by the react-router-dom
  const location = useLocation();
  const reDirect = location.state?.path || "/profile";

  const navigatePage = () => {
    if (savedPassword) {
      const { password, firstname, email } = savedPassword;
      if (password === logDetails.passcode && logDetails.emal === email) {
        logIn(firstname); //function call: callback function that adds user to the login function
        navigate(reDirect, { replace: true });
      }
    }
  };

  //
  const overWrite = () => {
    const parent = refDiv.current.parentElement;
    parent.parentElement.className = "login-form-none";
    let formSign = formHeader.current.parentElement;
    let formParent = formSign.parentElement;
    formParent.className = "show-signup";
  };
  return (
    <div
      style={{ display: "grid", justifyContent: "center", width: "100vw " }}
      className="login-form"
    >
      <div style={{ width: "50vw" }} className="login-inn">
        <div className="email">
          <p>
            <label>Email</label>
          </p>
          <input name="emal" value={logDetails.emal} onChange={changeValue} />
        </div>
        <div className="email">
          <p>
            <label>Password</label>
          </p>
          <input
            name="passcode"
            value={logDetails.passcode}
            onChange={changeValue}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "10px 0",
          }}
        >
          <button
            style={{ width: "60%", padding: "5px 2px" }}
            onClick={navigatePage}
          >
            Login
          </button>
        </div>

        <div>
          Don't havean account?{" "}
          <i ref={refDiv} onClick={overWrite}>
            Sign Up
          </i>
        </div>
      </div>
    </div>
  );
}
