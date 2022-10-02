import React from "react";
import "./index.css";
import event1 from "../../assets/img/event.png";
import attends from "../../assets/img/avatarevent.png";

export default function EventByDate() {
  return (
    <section id="EventByDate mb-5">
      <div className="container text-center ">
        <div className="text-center">
          <button className="button_event">Event</button>
          <h3 className="mb-5">Events For You</h3>
        </div>
        <div className="d-flex justify-content-center gap-5">
          <button className="event_date  ">
            2 <br />
            mon
          </button>

          <button className="event_date">
            3 <br />
            tue
          </button>
          <button className="event_date_active event_date">
            4 <br />
            wed
          </button>
          <button className="event_date">
            5 <br />
            thu
          </button>
          <button className="event_date">
            15 <br />
            fri
          </button>
        </div>
        <div className="container_event d-flex justify-content-center gap-4 mt-5">
          <div className="card  ">
            <img
              src={event1}
              className="card-img-top event_image"
              alt="event1"
            />
            <div className="card-body card_image text-start text-white">
              <br />
              <p className="card-text card_text_event mt-5">
                Wed, 15 Nov, 4:00 PM
              </p>
              <h5 className="card-title  ">Sights & Sounds Exhibition</h5>
              <img className="mt-4" src={attends} alt="" />
            </div>
          </div>
          <div className="card  ">
            <img
              src={event1}
              className="card-img-top event_image"
              alt="event1"
            />
            <div className="card-body card_image text-start text-white">
              <br />
              <p className="card-text card_text_event mt-5">
                Wed, 15 Nov, 4:00 PM
              </p>
              <h5 className="card-title  ">Sights & Sounds Exhibition</h5>
              <img className="mt-4" src={attends} alt="" />
            </div>
          </div>
          <div className="card  ">
            <img
              src={event1}
              className="card-img-top event_image"
              alt="event1"
            />
            <div className="card-body card_image text-start text-white">
              <br />
              <p className="card-text card_text_event mt-5">
                Wed, 15 Nov, 4:00 PM
              </p>
              <h5 className="card-title  ">Sights & Sounds Exhibition</h5>
              <img className="mt-4" src={attends} alt="" />
            </div>
          </div>
          <div className="card  ">
            <img
              src={event1}
              className="card-img-top event_image"
              alt="event1"
            />
            <div className="card-body card_image text-start text-white">
              <br />
              <p className="card-text card_text_event mt-5">
                Wed, 15 Nov, 4:00 PM
              </p>
              <h5 className="card-title  ">Sights & Sounds Exhibition</h5>
              <img className="mt-4" src={attends} alt="" />
            </div>
          </div>
        </div>
        <div className="slider_event d-flex justify-content-center mt-5 mb-5">
          <button
            className="btn event_button_back"
            type="submit"
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-arrow-right-square-fill "
              viewBox="0 0 16 16"
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
          </button>
          <button
            className="btn "
            type="submit"
            id="button-addon2 event_button_next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="blue"
              className="bi bi-arrow-right-square-fill "
              viewBox="0 0 16 16"
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
