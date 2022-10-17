import { combineReducers } from "redux";

// import counter from "./counter";
import booking from "./booking";
import user from "./user";
import product from "./product";
import event from "./event";

export default combineReducers({
  // counter,
  user,
  product,
  event,
  booking,
});
