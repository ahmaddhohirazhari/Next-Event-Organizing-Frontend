import React from "react";
import "./index.css";
import logo from "../../assets/img/logo.png";
import fb from "../../assets/img/fb-icon.png";
import wa from "../../assets/img/wa-icon.png";
import ig from "../../assets/img/ig-icon.png";
import tweet from "../../assets/img/tweet-icon.png";

export default function Footer() {
  return (
    <div>
      <footer id="Footer">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-5 text-start">
              <img className="logo_footer mb-3" src={logo} alt="logo" />
              <p>Find events you love with our</p>
              <div className="d-flex gap-2">
                <img src={fb} alt="fb" />
                <img src={wa} alt="wa" />
                <img src={ig} alt="ig" />
                <img src={tweet} alt="tweet" />
              </div>
            </div>

            <div className="col-md-2 text-start mt-4">
              <p>Wetick</p>
              <ul className="list_footer navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Payments
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Payments
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 text-start mt-4">
              <p>Features</p>
              <ul className="list_footer navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Payments
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 text-start mt-4">
              <p>Company</p>
              <ul className="list_footer navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Payments
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-start mt-5">© 2020 Wetick All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
