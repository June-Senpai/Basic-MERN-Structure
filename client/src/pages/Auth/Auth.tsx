import React from "react";
import { ThemedBackground } from "../../component/ThemedBackground";
import "./auth.css";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [isSignUpClicked, setIsSignUpClicked] = React.useState(false);
  const [isSignInClicked, setIsSignInClicked] = React.useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4001/auth/login`, {
        username,
        password,
      });
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  const onSubmitRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:4001/auth/register`, {
        username,
        password,
      });
      alert("reg done, now login ");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="parent">
      <ThemedBackground />
      <div className="child">
        <div className="form-box">
          <div className="container-for-auth">
            <div className="headers-for-auth">
              <div>LOGIN </div>
              <div>SignUp</div>
            </div>
            <div className="blueBg">
              <div className="box-auth signin">
                <h2>Already Have an Account ?</h2>
                <button
                  className="signinBtn"
                  onClick={() => {
                    setIsSignInClicked(true);
                    setIsSignUpClicked(false);
                  }}
                >
                  Sign In
                </button>
              </div>
              <div className="box-auth signup">
                <h2>Don't Have an Account ?</h2>
                <button
                  className="signupBtn"
                  onClick={() => {
                    setIsSignUpClicked(true);
                    setIsSignInClicked(false);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div
            className={`formBx ${isSignUpClicked ? "move-right" : ""} ${
              isSignInClicked ? "move-left" : ""
            }`}
          >
            {isSignInClicked && (
              <div className="form signinForm">
                <form onSubmit={onSubmitLogin}>
                  <h3>Sign In</h3>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                  />
                  <input type="submit" value="Login" />
                </form>
              </div>
            )}
            {isSignUpClicked && (
              <div className="form signupForm">
                <form onSubmit={onSubmitRegister}>
                  <h3>Sign Up</h3>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                  />
                  <input type="submit" value="Register" />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
