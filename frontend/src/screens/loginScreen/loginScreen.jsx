import React, { useState } from "react";
import MainScreen from "../../component/mainScreen";
import { NavLink } from "react-router-dom";
import './loginScreen.css';
import axios from "axios";
import Loading from "../../component/Loading";
import ErrorMessage from "../../component/ErrorMessage";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

 const submitHandler = async (e) => {
   e.preventDefault();
   
   try {
      const config={
        headers:{
          "Content-type": "application/json",
        },
      };
    
      setLoading(true);
     const { data } = await axios.post(
       "http://localhost:5000/api/users/login",
       {
         email,
         password,
       },
       config
     );

     localStorage.setItem("userInfo",JSON.stringify(data));
     setLoading(false);
    
   } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
   }
 };

  return (
    <div
      className="loginPage"
      style={{
        backgroundImage: `url('/images/loginWala.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <MainScreen title="LOGIN">
        <div className="loginContainer">
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          <form onSubmit={submitHandler} className="loginForm">
            <div class="form-group">
              <label for="exampleInputEmail1"></label>
              <input
                type="email"
                class="form-control p-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ fontSize: "16px" }}
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1"></label>
              <input
                type="password"
                class="form-control p-4"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                style={{ fontSize: "16px" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary p-2"
              style={{
                width: "180px",
                marginLeft: "75px",
                marginBottom: "20px",
                marginTop: "25px",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              Login
            </button>
          </form>
          <div class="row">
            <div class="col" style={{ color: "black", fontSize: "15px" }}>
              New Customer ?{" "}
              <NavLink
                to="/register"
                style={{ color: "blue", marginRight: "2px" }}
              >
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
