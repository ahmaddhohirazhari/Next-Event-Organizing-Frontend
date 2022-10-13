import React from "react";
import moment from "moment";
import "./index.css";
import { useNavigate } from "react-router-dom";

import attends from "../../assets/img/avatarevent.png";

function CardEvent(props) {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/detail/${props.data.eventId}`);
  };
  return (
    <div className="CardEvent">
      <div className="card ">
        <img
          src={`https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/${props.data.image}`}
          className="card-img-top event_image"
          alt="event1"
        />
        <div className="card-body card_image text-start text-white">
          <br />
          <p className="card-text card_text_event ">
            {moment(props.data.dateTimeShow).format("dddd,DD MMM")}
          </p>
          <h5 className="card-title card_title ">{props.data.name}</h5>
          <img className="attends " src={attends} alt="" />
          <button className="btn btn-primary" onClick={handleDetail}>
            Detail
          </button>
          {props.manageEvent ? (
            <>
              <button
                className="btn btn-secondary"
                onClick={() => props.setUpdate(props.data)}
              >
                Update
              </button>
              <button className="btn btn-danger" onClick={handleDetail}>
                Delete
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

// CardEvent.propTypes = {
//   data: PropTypes.object,
//   newData: PropTypes.string,
// };

export default CardEvent;
