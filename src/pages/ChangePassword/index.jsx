import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { getDataUser, resetPassword } from "../../stores/actions/password";
import Sidebar from "../../components/Sidebar";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const password = useSelector((state) => state.password);
  console.log(password);

  const [form, setForm] = useState({});
  const userId = localStorage.getItem("userId");
  console.log(userId);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    dispatch(getDataUser(userId));
  }, []);

  const handleSubmit = (e) => {
    setIsUpdate(!isUpdate);
    e.preventDefault();
    // HANYA DIGUNAKAN KETIKA INPUT ADA YANG BERTIPE DATA FILE
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    // formData.append("name", "aaa")
    // formData.append("price", "123")
    // formData.append("image", File)

    dispatch(resetPassword(formData, userId)).then(() => {
      dispatch(getDataUser());
      resetForm();
      setIsUpdate(false);
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
  };

  const resetForm = () => {
    setForm({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="profil">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="main_profil">
          <div className="card container p-4">
            <h2>Change Password</h2>
            <hr />
            {password.message && (
              <div
                className={
                  "alert alert-dismissible fade show " + password.isError
                    ? "alert-danger"
                    : "alert-primary"
                }
                role="alert"
              >
                {password.message}
              </div>
            )}

            <form onSubmit={isUpdate ? handleUpdate : handleSubmit}>
              <label className="me-3">Old Password</label>
              <input
                type="password"
                className="w-100"
                name="oldPassword"
                onChange={handleChangeForm}
                value={form.oldPassword}
              />
              <label className="me-3 mt-3">New Password</label>
              <input
                type="password"
                className="w-100"
                name="newPassword"
                onChange={handleChangeForm}
                value={form.newPassword}
              />
              <label className="me-3 mt-3">Confirm Password</label>
              <input
                type="password"
                className="w-100"
                name="confirmPassword"
                onChange={handleChangeForm}
                value={form.confirmPassword}
              />

              <button type="submit" className="w-100 my-5 btn btn-primary">
                {password.isLoading ? (
                  <div className="spinner-border text-white" role="status">
                    <span className="sr-only"></span>
                  </div>
                ) : (
                  <div>{isUpdate ? "Update" : "Save"}</div>
                )}
              </button>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
