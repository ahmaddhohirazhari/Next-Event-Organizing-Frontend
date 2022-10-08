import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import SeatPosition from "../../components/Seatposition";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ticketREG from "../../assets/img/REG.png";
import ticketVIP from "../../assets/img/VIP.png";
import ticketVVIP from "../../assets/img/VVIP.png";

function Order() {
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
    // const result= await axios.get(`/`)
    // https://www.notion.so/Modul-Booking-293a2b5a8f2b4d09a8e1f25304592c22
    const DATADUMMY = {
      status: 200,
      message: "Success Get Data Section By Event Id",
      data: [
        {
          section: "REG1-1",
          booked: 20,
          available: 10,
          statusFull: false,
        },
        {
          section: "REG1-2",
          booked: 15,
          available: 15,
          statusFull: false,
        },
        {
          section: "REG1-3",
          booked: 0,
          available: 30,
          statusFull: false,
        },
        {
          section: "REG1-4",
          booked: 30,
          available: 0,
          statusFull: true,
        },
      ],
    };
    console.log(listBooking);
    let dataFullSeat = DATADUMMY.data.filter((item) => item.statusFull);
    dataFullSeat = dataFullSeat.map((item) => item.section);
    setFullSeat(dataFullSeat);
    setListBooking(DATADUMMY.data);
  };

  const getDataEvent = () => {
    // https://www.notion.so/Modul-Event-413ecaad2dd04d4eb0c6c2afc4f50888
    const DATADUMMY = {
      status: 200,
      message: "Success Get Event By Id",
      data: [
        {
          eventId: "e29b8308-d23d-42f0-9071-639403c0c451",
          name: "We The Fest",
          category: "Music",
          location: "Jakarta",
          detail: "Lorem ipsum dolor amet",
          dateTimeShow: "2022-01-01 10:00:00",
          price: 150000,
        },
      ],
    };
    setDataEvent(DATADUMMY.data);
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
                        return (
                          <div className="my-3" key={index}>
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
                            <label className="ms-3">
                              Section {data[0]}, Row {data[1]} - $ {item.price}
                            </label>
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
