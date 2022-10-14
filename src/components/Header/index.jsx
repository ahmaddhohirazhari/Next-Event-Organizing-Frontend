import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import "./index.css";
import logo from "../../assets/img/logo.png";

import avatarDefault from "../../assets/img/avatar.jpg";

// const user = useSelector((state) => state.user);

export default function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const name = user.data.username;
  const avatar = `https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/${user.data.image}`;

  const isImage = user.data.image;
  const isLogin = localStorage.getItem("token");

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid navbar">
          <a className="navbar-brand logo" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">HM</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link link_header">
                  Home
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="/">
                  Home Anchor
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="/manage-event" className="nav-link link_header">
                  Create Event
                </Link>
                {/* <a className="nav-link" href="/detail">
                  Create Event
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link link_header">
                  Location
                </Link>
                {/* <a className="nav-link" href="#">
                  Location
                </a> */}
              </li>
            </ul>
            <div className="d-flex gap-3">
              {isLogin ? (
                <>
                  <div style={{ cursor: "pointer" }}>
                    <div className="dropdown justify-content-center">
                      {isImage ? (
                        <img
                          className="avatar dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          src={avatar}
                          alt="avatar"
                        />
                      ) : (
                        <img
                          src={avatarDefault}
                          alt="avatar"
                          className="avatar dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        />
                      )}

                      <ul
                        className="dropdown-menu dropdown-menu-white"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <Link to="/Profil" className="nav-link link_header">
                            Profil
                          </Link>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={handleLogout}
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="my-auto">{name ? name : "Anonymous"}</p>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleNavigate("signin")}
                  >
                    Signin
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleNavigate("signup")}
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
