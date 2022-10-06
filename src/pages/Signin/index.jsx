import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

import "./index.css";
import Footer from "../../components/Footer";
import banner from "../../assets/img/banner-signup.png";
import logo from "../../assets/img/logo.png";
import google from "../../assets/img/google_logo.png";
import fb from "../../assets/img/fb_logo.png";

function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/login", form);
      localStorage.setItem("idUser", result.data.data.userId);
      localStorage.setItem("token", result.data.data.token);
      alert(result.data.msg);
      navigate("/");
    } catch (error) {
      alert(error.response.data.msg);
      //   console.error(error.response);
    }
  };

  const handleChangeForm = (e) => {
    // console.log("ANDA SEDANG MENGINPUT DI = " + e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
    // form = {
    //     email : "bagus@gmail.com"
    //     password : 123
    // }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword); // mengeset nilai kebalikan dari boolean
  };

  return (
    <>
      <section id="signin">
        <div className="signin">
          <img className="image_signin" src={banner} alt="banner" />
        </div>

        <div className="form_signin">
          <img src={logo} alt="logo" />

          <h2 className="text_signin_1">Sign In</h2>
          <h3 className="text_signin_2">Hi, Welcome back to Urticket!</h3>
          <form action="input">
            <input
              className="form_input_signin"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChangeForm}
            />
          </form>
          <div className="input-group input_password mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleChangeForm}
              className="form-control form_input_signin1"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="button_hendle_password "
              onClick={handleShowPassword}
            >
              {showPassword ? (
                <>
                  <i className="bi bi-eye"></i>
                </>
              ) : (
                <>
                  <i className="bi bi-eye-slash"></i>
                </>
              )}
            </button>
          </div>

          <h3 className="text-end">
            <a className="forgot_password" href="">
              Forgot Password?
            </a>
          </h3>

          <input
            className="submit_signin"
            type="submit"
            value="Sign In"
            onClick={handleLogin}
          />

          <br />
          <div className="logo">
            <div>
              <img className="google" src={google} alt="google" />
            </div>
            <div>
              <img className="fb" src={fb} alt="fb" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Signin;
