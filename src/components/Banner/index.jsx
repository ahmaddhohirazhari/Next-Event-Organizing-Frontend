import React from "react";
import "./index.css";

export default function Banner() {
  return (
    <section className="Banner text-center">
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 mt-5 border-1 text-start">
            <h1 className="title text-white mt-5">
              Find events you <br />
              love with our
            </h1>
            <div className="form text-center mt-5">
              <div className=" input-group">
                <input
                  type="text"
                  aria-label="First name"
                  className="input_banner form-control"
                  placeholder="Search Event"
                ></input>
                <input
                  type="text"
                  aria-label="where"
                  className="input_banner where form-control"
                  placeholder="Where?"
                ></input>
                <button className="btn " type="submit" id="button-addon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#FF3D71"
                    className="bi bi-arrow-right-square-fill "
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
