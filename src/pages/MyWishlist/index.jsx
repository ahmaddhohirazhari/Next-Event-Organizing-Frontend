import React from "react";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function MyWishList() {
  return (
    <div id="profil">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main id="main_profil">
          <h2>Profil</h2>
        </main>
      </div>

      <Footer />
    </div>
  );
}
