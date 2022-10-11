import React from "react";
import moment from "moment";
import "./index.css";
import attends from "../../assets/img/avatarevent.png";

function CardEvent(props) {
  return (
    <div className="CardEvent">
      <div
        className="card "
        onClick={() => props.handleDetail(props.data.eventId)}
      >
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
