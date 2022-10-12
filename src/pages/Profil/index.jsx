import React from "react";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import avatar from "../../assets/img/avatar.jpg";

export default function Profil() {
  return (
    <div className="profil">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="main_profil">
          <h2>Profil</h2>
          <div className="row ">
            <div className="col-sm-8">
              <div className="row form-profil">
                <div className="col-sm-5 label-profil">
                  <label htmlFor="name" className="mt-4 ms-2">
                    Nama
                  </label>
                  <br />
                  <label htmlFor="username" className="mt-5 ms-2">
                    Username
                  </label>
                  <br />
                  <label htmlFor="" className="mt-5 ms-2">
                    Email
                  </label>
                  <br />
                  <label htmlFor="" className="mt-5 ms-2">
                    Phone Number
                  </label>
                  <br />
                  <label htmlFor="" className="mt-5 ms-2">
                    Gender
                  </label>
                  <br />
                  <label htmlFor="" className="mt-5 ms-2">
                    Profesion
                  </label>
                  <br />
                  <label htmlFor="" className="mt-5 ms-2">
                    Nationality
                  </label>
                  <br />
                  <label htmlFor="" className="mt-5 ms-2">
                    Birthday Date
                  </label>
                </div>
                <div className="col-sm-7 data-user">
                  <input
                    type="text"
                    className=" input_profil  "
                    aria-describedby="emailHelp"
                  />
                  <p className="mt-5 ms-2">Ahmad</p>
                  <p className="mt-5 ms-2">Email</p>
                  <p className="mt-5 ms-2 mb-5">Phone Number</p>
                  <div className="form-check mt-5">
                    <div className="row justify-content-center mt-5">
                      <div className="col">
                        <input
                          className="form-check-input "
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input "
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <input type="text" className="mt-3 ms-2 mb-1 input_profil" />
                  <input type="text" className="mt-4 ms-2 mb-3 input_profil" />
                  <input type="date" name="" id="" className="mt-4 ms-2" />
                </div>
              </div>
            </div>
            <div className="col-sm-4 form-image-user">
              <div className="image_profil">
                <img className="avatar-profil" src={avatar} alt="" />
              </div>
              <br />
              <div className="button-choose">
                <button className="choose-photo">Choose Photo</button>
              </div>
            </div>
            <button className="btn btn-primary save-profil ">Save</button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
