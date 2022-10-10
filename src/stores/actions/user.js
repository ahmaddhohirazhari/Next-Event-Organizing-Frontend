import axios from "axios";

export const getDataUser = (userId) => {
  return {
    type: "GET_DATA_USER_BY_ID",
    payload: axios.get(`user/${userId}`),
  };
};
