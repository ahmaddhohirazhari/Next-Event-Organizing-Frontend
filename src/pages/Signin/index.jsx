import "./index.css";
import Footer from "../../components/Footer";
import banner from "../../assets/img/banner-signup.png";
import logo from "../../assets/img/logo.png";
import google from "../../assets/img/google_logo.png";
import fb from "../../assets/img/fb_logo.png";

function Signin() {
  return (
    <>
      <section id="signin">
        <div className="signin">
          <img className="image_signin" src={banner} alt="banner" />
        </div>

        <div className="form_signin">
          <img src={logo} alt="logo" />

          <h2 className="text_signin_1">Sign In</h2>
          <br />
          <h3 className="text_signin_2">Hi, Welcome back to Urticket!</h3>
          <form action="input">
            <input
              className="form_input_signin"
              type="text"
              placeholder="Username"
            />
            <br />
            <input
              className="form_input_signin"
              type="email"
              placeholder="Email"
            />
            <br />
            <input
              className="form_input_signin"
              type="password"
              placeholder="Password"
            />
            <br />
          </form>

          <h3>
            <a className="forgot_password" href="">
              Forgot Password?
            </a>
          </h3>
          <a href="./home.html">
            <input className="submit_signin" type="submit" value="Sign In" />
          </a>
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
