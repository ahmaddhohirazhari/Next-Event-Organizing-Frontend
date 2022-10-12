import React from "react";
import avatar from "../../assets/img/avatar.jpg";
import "./index.css";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <div className="profil">
        <img className="user_profil " src={avatar} alt="" />
      </div>
      <ul className="list_sidebar">
        <li
          className="mt-3 nav-item "
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-person-circle me-2 text-secondary "></i>
          Profil
        </li>
        <ul className="dropdown-menu ">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
        </ul>
        <li className="mt-3">
          <i className="bi bi-list-check me-2 text-secondary"></i>My Booking
        </li>
        <li className="mt-3">
          <i className="bi bi-heart-fill me-2"></i>My Wishlist
        </li>
        <li className="mt-3">
          <i className="bi bi-gear-fill me-2 text-secondary"></i>Setting
        </li>
        <li className="mt-3">
          <i className="bi bi-box-arrow-right me-2 text-danger"></i>Logout
        </li>
      </ul>
    </div>
  );
}
