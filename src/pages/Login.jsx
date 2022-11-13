import React, {useState} from "react";
import { useAuthentication } from "../auth";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
    const [logDetails, setLoginDetails] = useState({passcode:"", emal:""});
    const changeValue = (e)=>{
        setLoginDetails({
            ...logDetails,
            [e.target.name]: e.target.value
        })

    }
    let savedPassword = JSON.parse(localStorage.getItem(logDetails.passcode))
   

const { logIn } = useAuthentication(); //destructuring of login provided by the createContext api
  const navigate = useNavigate(); //for navigation provided by the react-router-dom
  const location = useLocation();
  const reDirect = location.state?.path || "/profile";

  const navigatePage = () => {
    if(savedPassword){
        const{password,firstname,  email}=savedPassword
        if (password === logDetails.passcode && logDetails.emal === email) {
      
            logIn(firstname); //function call: callback function that adds user to the login function
            navigate(reDirect, { replace: true });
        }
       }
  }
  
    
  return (
    <div style={{ display: "grid", justifyContent: "center",  width: "100vw " }}>
      <div style={{ width: "50vw" }}>
        <div className="email">
          <p>
            <label>Email</label>
          </p>
          <input name="emal" value={logDetails.emal} onChange={changeValue}/>
        </div>
        <div className="email">
          <p>
            <label>Password</label>
          </p>
          <input  name="passcode" value={logDetails.passcode} onChange={changeValue}/>
        </div>
        <div style={{ display: "flex", justifyContent: "center", width:'100%', padding:"10px 0"}}>
          <button style={{width: "60%", padding:"5px 2px" }} onClick={navigatePage}>Login</button>
        </div>
      </div>
    </div>
  );
}
