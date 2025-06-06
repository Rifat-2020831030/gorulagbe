import "./Auth.css";

import React, { useState } from "react";

const Auth = ({ page, setToken, setIsVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [district, setDistrict] = useState("");

  const loginHandler = () => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, mobile, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { token, message, role } = data;
        if (token) {
          setToken(token);
          localStorage.setItem("token", token);
          console.log(data);
          window.location.reload();

        } else {
          alert(message);
        }
      });
  };

  const registerHandler = () => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, mobile, role, district }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          localStorage.setItem("token", data.token);
          console.log(data);
          window.location.reload();

        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(page);
    if (page === "login") {
      loginHandler();
      console.log("loginHandler");
    } else if (page === "registration") {
      registerHandler();
      console.log("registerHandler");
    } else {
      console.log(page);
    }
  };

  return (
    <>
      <div className="auth-container">
        <span
          className="modal-close"
          onClick={() => {
            setIsVisible(false);
            console.log("click");
          }}
        >
          &times;
        </span>
        <div className="auth-content">
          <p className="heading">
            {page === "login" ? "Login" : "Registration"}
          </p>
          <form onSubmit={submitHandler}>
            <input
              type="email"
              className="input"
              placeholder="Email"
              required={page === "login" ? false : true}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              name="mobile"
              className="input"
              placeholder="Mobile Number"
              required={page === "login" ? false : true}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <div
              className="select-menu"
              style={{ display: page === "login" ? "none" : "block" }}
            >
              <select
                name="role"
                className="input"
                onChange={(e) => setRole(e.target.value)}
                placeholder="Role"
                value={role}
                required
              >
                <option value="">--Role</option>
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
                <option value="butcher">Butcher</option>
              </select>
              {/* add a drop down menu for selecting district of bd */}
              <select
                name="district"
                className="input"
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="District"
                value={district}
                required
              >
                <option value="">--District</option>
                <option value="dhaka">Dhaka</option>
                <option value="chattogram">Chattogram</option>
                <option value="khulna">Khulna</option>
                <option value="barishal">Barishal</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="sylhet">Sylhet</option>
                <option value="rangpur">Rangpur</option>
                <option value="mymensingh">Mymensingh</option>
              </select>
            </div>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="form-button" onClick={submitHandler}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
