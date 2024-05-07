import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./landingPage.css";
import { useEffect } from "react";
// import {useHistory} from "react-router-dom";

export default (LandingPage) => {
  //  const history = useHistory();
  // useEffect(()=>{
  //     const userInfo= localStorage.getItem("userInfo");
  //      if(userInfo) {
  //          history.push("/mynotes");
  //      }
  // },[]);

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Your Memento</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
                <NavLink to="/login">
                    <Button variant="primary" size="lg" className="landingbutton">
                      Login
                    </Button>
                </NavLink>
                <NavLink to="/register">
                    <Button
                      variant="outline-primary"
                      size="lg"
                      className="landingbutton"
                    >
                      Signup
                    </Button>
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
