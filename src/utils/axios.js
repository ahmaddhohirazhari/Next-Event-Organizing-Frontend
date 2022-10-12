import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://next-event-organizer-backend.vercel.app/api/",
  // baseURL: "http://localhost:3001/api/",
  // baseURL: "https://event-organizing-backend.vercel.app/api/",
});
// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const refreshToken = localStorage.getItem("refreshToken");
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      refreshtoken: refreshToken,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiIntances.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log(error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // JIKA TIDAK MENERAPKAN REFRESH TOKEN
    // if (error.response.status === 403) {
    //   localStorage.clear();
    //   window.location.href = "/signin";
    // }

    // JIKA MENERAPKAN REFRESH TOKEN
    if (error.response.status === 403) {
      console.log(error.response.status);
      console.log(error.response.data.msg);
      if (error.response.data.msg === "jwt expired") {
        console.log("cek");
        axiosApiIntances
          .post("auth/refresh")
          .then((res) => {
            console.log(res);
            alert("dapet token baru");
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("refreshToken", res.data.data.refreshToken);
            window.location.reload();
          })
          .catch(() => {
            localStorage.clear();
            console.log("masuk sini");
            // window.location.href = "/signin";
          });
      } else {
        console.log(error.response.data.msg);
        localStorage.clear();
        // window.location.href = "/signin";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
