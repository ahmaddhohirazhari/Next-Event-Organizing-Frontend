import React from "react";
import "./index.css";
import event1 from "../../assets/img/event.png";
import attends from "../../assets/img/avatarevent.png";

export default function EventByDate() {
  return (
    <section id="EventByDate">
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
      </div>
    </section>
  );
}
