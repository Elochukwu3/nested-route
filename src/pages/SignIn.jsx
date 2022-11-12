import React, { useReducer, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthentication } from "../auth";
import "../styles/Sign.css";
import useLocalstorage from "../useLocalStorage";

const initializer = {
  firstname: "",
  lastname: "",
  password: "",
  email: "",
  mobile: "",
  check: true,
  textFill: "",
  nationaity: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "changeValue":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return { state };
  }
}

const pattern = {
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@%$!%*?&#])[A-Za-z\d@%$!%*?&#].{8,20}$/,
  email: /^([a-z\d\.-_]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  firstname: /^[A-Za-z]+$/,
};
function validate(regex, input) {
  if (regex.test(input.value)) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
}

export const SignIn = () => {
  //useReducers for onchange in the inputs
  const [state, dispatch] = useReducer(reducer, initializer);
  const changeInput = (e) => {
    dispatch({
      type: "changeValue",
      payload: { name: e.target.name, value: e.target.value },
    }); //dispach actions(onchange)
    if (pattern[e.target.name]) validate(pattern[e.target.name], e.target); //regex inplementation
  };
  const {
    firstname,
    lastname,
    password,
    email,
    mobile,
    check,
    textFill,
    nationaity,
  } = state; //object destructuring

  //authentication using router
  const { logIn } = useAuthentication(); //destructuring of login provided by the createContext api
  const navigate = useNavigate(); //for navigation provided by the react-router-dom
  const location = useLocation();
  const reDirect = location.state?.path || "/profile";

  const navigatePage = () => {
    logIn(firstname); //function call: callback function that adds user to the login function
    navigate(reDirect, { replace: true });
  };
  const formHeaderText = useRef(null);
  const welcomeUser = useRef(null);

  const [val, setVal] = useLocalstorage(password, state);
  const submittedForm = (e) => {
    e.preventDefault();
    e.target.style.display = "none"; //on form submitt let the form disappear in other to welcome the user
    formHeaderText.current.style.display = "none";
    welcomeUser.current.style.display = "block";
    setVal({ ...state });
  };

  return (
    <main className="main-sign-in">
      <div className="form-container">
        <div className="form-inner">
          <div className="form-wrapper">
            <div className="form-cont">
              <div className="form-content">
                <section className="header">
                  <div className="contact-header" ref={formHeaderText}>
                    Form Details
                  </div>
                  {/* <div className="support">
                Hey fill in the form
                </div> */}
                </section>
                <form onSubmit={submittedForm}>
                  <div className="formTag">
                    <div className="name">
                      <p className="fullname">
                        <label htmlFor={"first_name"}>First name</label>
                        <input
                          type={"text"}
                          id={"first_name"}
                          required
                          placeholder="Enter your first name"
                          name="firstname"
                          value={firstname}
                          onChange={changeInput}
                        />
                      </p>
                      <p className="lastname">
                        <label htmlFor={"last_name"}>Last name</label>

                        <input
                          type={"text"}
                          id={"last_name"}
                          name={"lastname"}
                          value={lastname}
                          required
                          placeholder="Enter your last name"
                          onChange={changeInput}
                        />
                      </p>
                    </div>
                    <div className="email">
                      <p>
                        <label htmlFor={"email"}>Email</label>
                      </p>
                      <input
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        value={email}
                        placeholder={"yourname@email.com"}
                        required
                        onChange={changeInput}
                      />
                      <p>email must be a valid address e.g. jb@gmail.com</p>
                    </div>
                    <div className="email">
                      <p>
                        <label htmlFor={"password"}>Password</label>
                      </p>
                      <input
                        type={"password"}
                        id={"password"}
                        name={"password"}
                        value={password}
                        onChange={changeInput}
                        placeholder={"yourname@email.com"}
                        required
                      />
                      <p style={{ lineHeight: "14px" }}>
                        Password must contain alteast one uppercase, lowercase,
                        number, special character [@, and, #, $,-] and be 8-20
                        characters
                      </p>
                    </div>
                    <div className="email country">
                      <div className="country-num">
                        <p>
                          <label htmlFor={"number"}>Mobile No:</label>
                        </p>
                        <input
                          type={"tel"}
                          id={"number"}
                          value={mobile}
                          placeholder={"0000000"}
                          name={"mobile"}
                          required
                          onChange={changeInput}
                          className="input-havle"
                        />
                      </div>
                      <div className="country-num">
                        <p>
                          <label htmlFor={"nationaity"}>Nationality</label>
                        </p>
                        <input
                          type={"text"}
                          id={"nationaity"}
                          value={nationaity}
                          placeholder={"e.g USA"}
                          name={"nationaity"}
                          required
                          onChange={changeInput}
                          className="input-havle"
                        />
                      </div>
                    </div>
                    <div className="textArea" style={{ width: "100%" }}>
                      <p>
                        <label htmlFor="message">
                          What seravice/product should we provide the most?
                        </label>
                      </p>
                      <textarea
                        className="text-area"
                        id={"message"}
                        name={"textFill"}
                        value={textFill}
                        placeholder="Products you would like from us"
                        onChange={changeInput}
                      />
                    </div>
                    <div className="checkBox">
                      <input
                        type={"checkbox"}
                        className={"checkB"}
                        value={check}
                        name={"check"}
                        onChange={changeInput}
                        required
                      />

                      <span style={{ color: "#344054" }}>
                        {" "}
                        Agree to the <a href="terams.com">terms</a> and{" "}
                        <a href="gooogle.ccom">conditions</a>
                      </span>
                    </div>
                    <div style={{ width: "100%" }}>
                      <button type="submit" id="btn__submit">
                        {" "}
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
                <div style={{ display: "none" }} ref={welcomeUser}>
                  <p>Welcome user {firstname}</p>
                  <p>Click Ok to move to the dasgboard</p>
                  <button onClick={navigatePage}>Ok</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
