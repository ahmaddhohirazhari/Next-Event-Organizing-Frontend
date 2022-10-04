import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://next-event-organizer-backend.vercel.app/api/",
  // baseURL: "http://localhost:3001/api/",
});

export default axiosApiIntances;
