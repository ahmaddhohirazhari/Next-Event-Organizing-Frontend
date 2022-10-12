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
        <li className="mt-4 menu_profil ">
          <div
            className=" btn btn-toggle align-items-center rounded collapsed menu_profil link_sidebar"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="false"
          >
            <i className="bi bi-person-circle me-2 text-secondary  "></i>
            Profil
          </div>

          <div
            className="collapse text-start sub_menu_profil"
            id="dashboard-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small menu_profil ">
              <li className="mt-4 ">
                <a
                  href="#"
                  className="link-dark rounded ms-3 mt-5 sub_menu menu_profil link_sidebar"
                >
                  <i className="bi bi-credit-card-fill me-3"></i> Card
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  className="link-dark rounded ms-3 mt-3 sub_menu menu_profil link_sidebar"
                >
                  <i className="bi bi-pencil-square me-3"></i>Edit Profil
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  className="link-dark rounded ms-3 sub_menu menu_profil link_sidebar"
                >
                  <i className="bi bi-lock-fill me-3"></i>Change Password
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="mt-3">
          <a href="#" className="link_sidebar menu_profil">
            <i className="bi bi-list-check me-2 text-secondary"></i>My Booking
          </a>
        </li>
        <li className="mt-4">
          <a href="#" className="link_sidebar menu_profil">
            <i className="bi bi-heart-fill me-2"></i>My Wishlist
          </a>
        </li>
        <li className="mt-4">
          <a href="#" className="link_sidebar menu_profil">
            <i className="bi bi-gear-fill me-2 text-secondary"></i>Setting
          </a>
        </li>
        <li className="mt-4">
          <a href="#" className="link_sidebar menu_profil text-danger">
            <i className="bi bi-box-arrow-right me-2 text-danger"></i>Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
