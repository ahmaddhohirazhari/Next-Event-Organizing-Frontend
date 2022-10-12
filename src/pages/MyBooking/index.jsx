import React from "react";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function MyBooking() {
  return (
    <div id="profil">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main id="main_profil">
          <h2>My Booking</h2>
        </main>
      </div>

      <Footer />
    </div>
  );
}
