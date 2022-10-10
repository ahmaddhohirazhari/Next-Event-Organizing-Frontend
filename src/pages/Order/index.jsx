import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import SeatPosition from "../../components/Seatposition";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ticketREG from "../../assets/img/REG.png";
import ticketVIP from "../../assets/img/VIP.png";
import ticketVVIP from "../../assets/img/VVIP.png";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";

function Order() {
  const { eventId } = useParams();
  const [fullSeat, setFullSeat] = useState([]); // DI GUNAKAN UNTUK MENAMPUNG SEAT YANG FULL
  const [activeSeat, setActiveSeat] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SEDANG DIPILIH
  const [dataOrder, setDataOrder] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SUDAH TERPILIH
  const [listBooking, setListBooking] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG LIST DATA SEAT YANG SUDAH DI BOOKING
  const [dataEvent, setDataEvent] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG DATA EVENT

  useEffect(() => {
    getDataBooking();
    getDataEvent();
  }, []);

  const getDataBooking = async () => {
    const result = await axios.get(`booking/bookingSection/${eventId}`);
    console.log(result.data.data);

    let dataFullSeat = result.data.data.filter((item) => item.statusFull);
    dataFullSeat = dataFullSeat.map((item) => item.section);
    setFullSeat(dataFullSeat);
    setListBooking(result.data.data);
  };
  console.log(dataEvent);
  console.log("data order: " + dataOrder);
  console.log("data listBooking: " + listBooking);
  console.log("data activeSeat: " + activeSeat);
  console.log("data fullSeat: " + fullSeat);
  const getDataEvent = async () => {
    try {
      const result = await axios.get(`event/${eventId}`);
      console.log(result);

      setDataEvent(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectSeat = (seat) => {
    // PROSES PEMILIHAN SEAT
    const data = seat.split("-");
    if (!fullSeat.includes(seat)) {
      if (activeSeat.includes(seat)) {
        const deleteSeat = activeSeat.filter((item) => item !== seat);
        const deleteDataOrder = dataOrder.filter((item) => item.seat !== seat);
        setActiveSeat(deleteSeat);
        setDataOrder(deleteDataOrder);
      } else {
        setActiveSeat([...activeSeat, seat]);
        setDataOrder([
          ...dataOrder,
          {
            seat,
            qty: 1,
            price: data[0].includes("VVIP")
              ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
              : data[0].includes("VIP")
              ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
              : dataEvent[0].price, // HARGA TIDAK BERUBAH UNTUK REGULAR
          },
        ]);
      }
    }
  };

  const handleOrderSeat = () => {
    console.log(dataOrder);
  };

  const clearOrderSeat = () => {
    setActiveSeat([]);
    setDataOrder([]);
  };
  const increaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    const price = section.seat.includes("VVIP")
      ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
      : section.seat.includes("VIP")
      ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
      : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
    findData.qty += 1;
    findData.price = price * findData.qty;
    setDataOrder([...dataOrder]);
  };

  const decreaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    if (findData.qty === 1) {
      const deleteData = dataOrder.filter((item) => item.seat !== section.seat);
      const deleteSeat = activeSeat.filter((item) => item !== section.seat);
      setDataOrder(deleteData);
      setActiveSeat(deleteSeat);
    } else {
      const price = section.seat.includes("VVIP")
        ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
        : section.seat.includes("VIP")
        ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
        : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
      findData.qty -= 1;
      findData.price = price * findData.qty;
      setDataOrder([...dataOrder]);
    }
  };
  return (
    <>
      <div className="order_page">
        <Header />
        <div className=" order ">
          <div className="container ">
            <div className="card card_order">
              <div className="row m-5">
                <div className="col-sm-12 col-md-7 p-0 p-md-4">
                  <div className="rotate-seat roteate_seat_order text-center">
                    <SeatPosition
                      width="100%" // MEMBERIKAN BESARAN PADA POLA SEAT
                      height="100%" // MEMBERIKAN TINGGI PADA POLA SEAT
                      fullSeat={fullSeat}
                      activeSeat={activeSeat}
                      handleSelectSeat={handleSelectSeat}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-5 p-0 p-md-4">
                  <h4>Tickets</h4>

                  {activeSeat.length > 0 ? (
                    <div className="ticket-scrolling">
                      {dataOrder.map((item, index) => {
                        const data = item.seat.split("-");
                        const dataSeat = listBooking.filter(
                          (itemSeat) => itemSeat.section === item.seat
                        );
                        return (
                          <div className="my-3 " key={index}>
                            <img
                              src={
                                data[0].includes("VVIP")
                                  ? ticketVVIP
                                  : data[0].includes("VIP")
                                  ? ticketVIP
                                  : ticketREG
                              }
                              className="ticket-icon"
                              alt="ticket icon"
                            />
                            <label className="ms-3 ">
                              Section {data[0]}, Row {data[1]} - $ {item.price}
                              <br />[
                              {dataSeat.length > 0
                                ? dataSeat[0].available
                                : data[0].includes("VVIP")
                                ? item.available
                                : data[0].includes("VIP")
                                ? item.available
                                : listBooking[0].available}{" "}
                              Seats Available]
                            </label>
                            <br />
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => decreaseOrderSeat(item)}
                            >
                              -
                            </button>
                            <h5 className="d-inline mx-2">{item.qty}</h5>
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => increaseOrderSeat(item)}
                            >
                              +
                            </button>
                            <hr />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center h-50">
                      <h6>Select Seat</h6>
                    </div>
                  )}
                  <hr />
                  <div className="d-grid gap-2 justify-content-center">
                    <button
                      className="btn btn-primary checkout_button_order"
                      onClick={handleOrderSeat}
                    >
                      Checkout
                    </button>
                    <button
                      className="btn btn-danger checkout_button_order"
                      onClick={clearOrderSeat}
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Order;
