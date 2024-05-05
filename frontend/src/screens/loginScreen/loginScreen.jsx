import React, { useState } from "react";
import MainScreen from "../../component/mainScreen";
import { NavLink } from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <MainScreen title="LOGIN">
        <div className="loginContainer">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
          <div class="row">
            <div class="col">
              New Customer ?{" "}
              <NavLink to="/register" style={{ color: "darkGreen" }}>
                Register Here
              </NavLink>
            </div>
          </div>
        </div>
      </MainScreen>
    </div>
  );
}

export default LoginScreen;
