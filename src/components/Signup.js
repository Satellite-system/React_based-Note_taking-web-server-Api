import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const [auth, setAuth] = useState({ name: "", password: "", email: "" });
  let history = useHistory();

  const singupReq = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: auth.name,
        email: auth.email,
        password: auth.password,
      }),
    });
    const res = await response.json(); // parses JSON response into native JavaScript
    console.log(res);
    if (res.success) {
      localStorage.setItem("authToken", res.authToken);
      history.push("/");
      props.showAlert("Bingo!!! Created a New Account","success");
    } else {
      props.showAlert("Something Went Wrong!!!","danger");
    }
  };
  const changeListener = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2 className="my-2">Sign UP Here</h2>
      <form action="submit" onSubmit={singupReq}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={auth.name}
            aria-describedby="emailHelp"
            onChange={changeListener}
            minLength={3}
            required
          />
        </div>
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
            onChange={changeListener}
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
            onChange={changeListener}
            minLength={5}
            required
          />
        </div>
        <button className="btn btn-success" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
