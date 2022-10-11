import React from "react";
// import "./index.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="nav-brand">
        {/* <img src="" alt="...">
            <div className="info">
                <h2>Hossein Nabi</h2>
                <p>Front-End Developer</p>
            </div> */}
      </div>
      <ul className="sidebar-list-top">
        <li className="nav-item">
          <i className="bx bxs-dashboard"></i>
          <span>Dashboard</span>
        </li>
        <li className="nav-item">
          <i className="bx bx-bar-chart-alt-2"></i>
          <span>Analytics</span>
        </li>
        <li className="nav-item">
          <i className="bx bx-cart"></i>
          <span>Orders</span>
        </li>
        <li className="nav-item">
          <i className="bx bx-calendar"></i>
          <span>Calendar</span>
        </li>
        <li className="nav-item">
          <i className="bx bx-star"></i>
          <span>Favorites</span>
        </li>
      </ul>
      <ul className="nav-list-bottom">
        <li className="nav-item">
          <i className="bx bx-cog"></i>
          <span>Settings</span>
        </li>
        <li className="nav-item">
          <i className="bx bx-phone"></i>
          <span>Contact</span>
        </li>
      </ul>
    </div>
  );
}
