import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import avatar from "../../assets/img/avatar.jpg";

import { useSelector, useDispatch } from "react-redux";
import { getDataUser, updateDataUser } from "../../stores/actions/user";

export default function Profil() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userId = user.data.userId;
  console.log(userId);
  const [form, setForm] = useState(user.data);

  // const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    dispatch(getDataUser(userId));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateDataUser(form, userId));
  };

  // const resetForm = () => {
  //   setForm({
  //     name: "",
  //     username: "",
  //     email: "",
  //     phoneNumber: "",
  //     gender: "",
  //     profession: "",
  //     nationality: "",
  //     dateOfBirth: "",
  //   });
  // };
  // const isFemale = user.data.gender === "female";
  // const isMale = user.data.gender === "male";

  // const showForm = () => {
  //   setIsUpdate(!isUpdate);
  // };
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="profil">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="main_profil">
          <h2>Profil</h2>
          <div className="row ">
            <div className="col-sm-8">
              {user.message && (
                <div
                  className={
                    "alert alert-dismissible fade show " + user.isError
                      ? "alert-danger"
                      : "alert-primary"
                  }
                  role="alert"
                >
                  {user.message}
                </div>
              )}
              <form onSubmit={handleUpdate}>
                <label htmlFor="name" className="mt-2 ms-2">
                  Nama
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="name"
                  onChange={handleChangeForm}
                  value={form.name}
                />
                <br />
                <label htmlFor="username" className="mt-2 ms-2">
                  Username
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="username"
                  onChange={handleChangeForm}
                  value={form.username}
                />
                <br />
                <label htmlFor="" className="mt-2 ms-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-100"
                  name="email"
                  onChange={handleChangeForm}
                  value={form.email}
                />
                <label htmlFor="" className="mt-2 ms-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="phoneNumber"
                  onChange={handleChangeForm}
                  value={form.phoneNumber}
                />
                <label htmlFor="" className="mt-2 ms-2">
                  Gender
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="gender"
                  onChange={handleChangeForm}
                  value={form.gender}
                />
                <br />
                <label htmlFor="" className="mt-2 ms-2">
                  Profesion
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="profession"
                  onChange={handleChangeForm}
                  value={form.profession}
                />
                <br />
                <label htmlFor="" className="mt-2 ms-2">
                  Nationality
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="nationality"
                  onChange={handleChangeForm}
                  value={form.nationality}
                />
                <br />
                <label htmlFor="" className="mt-2 ms-2">
                  Birthday Date
                </label>
                <input
                  type="date"
                  className="w-100"
                  name="dateOfBirth"
                  onChange={handleChangeForm}
                  value={form.dateOfBirth}
                />
                <button type="submit" className=" my-5 btn btn-primary">
                  {user.isLoading ? (
                    <div className="spinner-border text-white" role="status">
                      <span className="sr-only"></span>
                    </div>
                  ) : (
                    <div>Save</div>
                  )}
                </button>
              </form>
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
