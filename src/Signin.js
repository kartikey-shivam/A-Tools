import React from "react";
import Navbar from "./component/Navbar";
import Bgimg from "./assets/mission102.png";

import { Route } from "react-router-dom";
import { Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "./features/auth/authSlice";
const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // console.log(formData);
  const { email, password } = formData;

  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const pass = password.length;
  useEffect(() => {
    if (isError) {
      toast.error(message);
      if (!pass) {
        alert("Missing Password");
      } else {
        alert(message);
      }
    }

    if (isSuccess && user) {
      alert("success");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <div className="signin">
      <Navbar Clicked={onSubmit} />
      <div className="signin_box">
        <div className="signin_box-1">
          <form onSubmit={onSubmit} className="signin_box-1_sub">
            <h1 className="signin_heading">Welcome Back</h1>
            <p className="signin_subheading">Sub-title text goes here</p>
            <div>
              <div>
                <input
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  className="signin_input"
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  placeholder="Password *"
                  onChange={onChange}
                  type="password"
                  name="password"
                  className="signin_input"
                />
              </div>
            </div>
            <div className="signin-btn_con">
              <button className="signin-btn" type="Submit">
                Login
              </button>
            </div>
            <div className="signin_other">
              <div className="signin_other-RP">
                <input type="checkbox" className="checkbox" />
                Remember Password
              </div>
              <div className="signin_other-FP">Forgot Password ?</div>
            </div>
          </form>
        </div>
        <div className="signin_box-2">
          <img src={Bgimg} width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
