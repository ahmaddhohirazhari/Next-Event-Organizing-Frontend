import React from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Payment() {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
