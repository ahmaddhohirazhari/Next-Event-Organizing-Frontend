import React from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Payment() {
  const { state } = useLocation();
  let quantity = 0;
  let price = 0;
  console.log(state);
  const handleQuantity = (state) => {
    let result = 0;
    state.dataOrder.filter((e) => {
      if (e.seat.includes("REG")) {
        result = result + e.qty;
      }
    });
    return result;
  };
  const handlePrice = (state) => {
    let result = 0;
    state.dataOrder.filter((e) => {
      if (e.seat.includes("REG")) {
        result = result + e.price;
      }
    });
    return result;
  };
  quantity = handleQuantity(state);
  price = handlePrice(state);

  return (
    <div className="payment">
      <Header />
      <section className="paymentCard justify-content  ">
        <h4 className="  text-center ">Ticket Detail</h4>
        <div className="row  paymentReport">
          <div className="col-sm-6 list1 mt-3">
            <p>Section</p>
            <p>Quantity</p>
            <p>Total Payment</p>
          </div>
          <div className="col-sm-6 mt-3 text-end">
            <p>VIP</p>
            <p>{quantity}</p>
            <p>{price}</p>
          </div>
        </div>
        <a href="./home.html">
          <div className="text-center">
            <button className="btn btn-primary payment-button">Payment</button>
          </div>
        </a>
      </section>
      <Footer />
    </div>
  );
}
