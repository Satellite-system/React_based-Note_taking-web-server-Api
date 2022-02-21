import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [auth, setAuth] = useState({ email: "", password: "" });
  let history = useHistory();

  const typeChecker = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const loginReq = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/loginuser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: auth.email, password: auth.password }),
    });
    const res = await response.json(); // parses JSON response into native JavaScript
    // console.log(res);
    if(res.success){
        localStorage.setItem("authToken",res.authToken);
        history.push("/");
        props.showAlert("Successfully! Logged In","success");
    }else{
        props.showAlert("Invalid Credentials","danger");
    }
  };

  return (
    <div className="container">
      <h1 className="my-2 text-primary">Login to Continue</h1>

      <form action="submit" onSubmit={loginReq}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={auth.email}
            aria-describedby="emailHelp"
            onChange={typeChecker}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={auth.password}
            onChange={typeChecker}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
