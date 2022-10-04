import React from "react";
import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import "./index.css";
import banner from "../../assets/img/banner-signup.png";
import logo from "../../assets/img/logo.png";

export default function SignupBanner() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      const result = await axios.post("auth/register", form);
      localStorage.setItem("userId", result.data.data.userId);
      alert(result.data.msg);
      navigate("/Signin");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="signup">
      <div className="sign_up text-center">
        <img className="banner_image_signup" src={banner} alt="banner" />
      </div>

      <div className="form_signup">
        <img src={logo} alt="logo" />
        <br />
        <br />
        <h2 className="signup_text">Sign Up</h2>
        <h3 className="signup_text2">
          Already have an account? <a href="./login.html"> Log In</a>
        </h3>
        <form className="form_input_signup" action="input">
          <input
            className="form_input_signup_1"
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChangeForm}
          />
          <br />
          <input
            className="form_input_signup_1"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChangeForm}
          />
          <br />
          <input
            className="form_input_signup_1"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChangeForm}
          />
          <br />
          <input
            className="form_input_signup_1"
            type="password"
            placeholder="Confirm Password"
          />
          <br />
        </form>
        <input
          className="checkbox_signup"
          type="checkbox"
          id="terms"
          name="terms"
          value="true"
        />
        <label htmlFor="terms"> Accept terms and condition</label>
        <br />
        <input
          className="submit_signup"
          type="submit"
          value="Sign Up"
          onClick={handleSignup}
        />
      </div>
    </section>
  );
}
