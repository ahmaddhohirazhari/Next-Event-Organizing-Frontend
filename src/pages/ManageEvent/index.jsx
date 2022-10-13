import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import CardEvent from "../../components/CardEvent";

import { useSelector, useDispatch } from "react-redux";
import {
  getDataEvent,
  createDataEvent,
  updateDataEvent,
} from "../../stores/actions/event";
import Sidebar from "../../components/Sidebar";

export default function ManageEvent() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event);
  console.log(event);

  const [form, setForm] = useState({});
  const [image, setImage] = useState("");
  const [eventId, setEventId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    dispatch(getDataEvent());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // HANYA DIGUNAKAN KETIKA INPUT ADA YANG BERTIPE DATA FILE
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    // formData.append("name", "aaa")
    // formData.append("price", "123")
    // formData.append("image", File)

    dispatch(createDataEvent(formData)).then(() => {
      dispatch(getDataEvent());
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };

  const setUpdate = (data) => {
    setIsUpdate(true);
    setEventId(data.eventId);
    setForm({
      name: data.name,
      category: data.category,
      location: data.location,
      detail: data.detail,
      dateTimeShow: data.dateTimeShow,
      price: data.price,
      image: data.image,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }

    dispatch(updateDataEvent(formData, eventId)).then(() => {
      dispatch(getDataEvent());
      setIsUpdate(false);
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      image: "",
    });
    setImage("");
  };

  const handleChangeForm = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div>
      <Header />
      <div className="d-flex manage_event">
        <Sidebar />
        <main>
          <div className="card container p-4">
            <h1 className="text-center">ManageEvent</h1>
            <hr />
            {event.message && (
              <div
                className={
                  "alert alert-dismissible fade show " + event.isError
                    ? "alert-danger"
                    : "alert-primary"
                }
                role="alert"
              >
                {event.message}
              </div>
            )}

            <form onSubmit={isUpdate ? handleUpdate : handleSubmit}>
              <label className="me-3">Name</label>
              <input
                type="text"
                className="w-100"
                name="name"
                onChange={handleChangeForm}
                value={form.name}
              />
              <label className="me-3">Category</label>
              <input
                type="text"
                className="w-100"
                name="category"
                onChange={handleChangeForm}
                value={form.category}
              />
              <label className="me-3">Location</label>
              <input
                type="text"
                className="w-100"
                name="location"
                onChange={handleChangeForm}
                value={form.location}
              />
              <label className="me-3">Detail</label>
              <input
                type="text"
                className="w-100"
                name="detail"
                onChange={handleChangeForm}
                value={form.detail}
              />
              <label className="me-3 mt-3">Date Time Show</label>
              <input
                type="date"
                className="w-100"
                name="dateTimeShow"
                onChange={handleChangeForm}
                value={form.dateTimeShow}
              />
              <label className="me-3">Price</label>
              <input
                type="number"
                className="w-100"
                name="price"
                onChange={handleChangeForm}
                value={form.price}
              />
              <label className="me-3 mt-3">Input Image</label>
              <input
                type="file"
                className="w-100"
                name="image"
                onChange={handleChangeForm}
              />
              {image && <img src={image} alt="view image" />}

              <button type="submit" className="w-100 my-5 btn btn-primary">
                {event.isLoading ? (
                  <div className="spinner-border text-white" role="status">
                    <span className="sr-only"></span>
                  </div>
                ) : (
                  <div>{isUpdate ? "Update" : "Save"}</div>
                )}
              </button>
            </form>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <main className="container d-flex gap-3 my-5">
            {event.data.length > 0 ? (
              event.data.map((item) => (
                <div key={item.id}>
                  <CardEvent
                    data={item}
                    setUpdate={setUpdate}
                    manageEvent={true}
                  />
                </div>
              ))
            ) : (
              <h1>Data Not Found !</h1>
            )}
          </main>
        </main>
      </div>
      <Footer />
    </div>
  );
}
