import React from "react";

import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

function CardEvent(props) {
  const navigate = useNavigate();
  // console.log(props);
  //   props = {
  //     data: {...},
  //     newData: "Data Baru nih"
  //     handleDetail: function handleDetailProduct(){...}
  //   }

  const handleDetail = () => {
    navigate(`/detail/${props.data.id}`);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* [1] = JIKA MENYIMPAN FULL URL*/}
      {/* <img
        className="card-img-top"
        src={props.data.image}
        alt="Card image cap"
      /> */}
      {/* [2] = JIKA MENYIMPAN HANYA NAMA GAMBAR */}
      {/* https://res.cloudinary.com/dd1uwz8eu/image/upload/v1662967884 */}
      <img
        className="card-img-top"
        src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1662967884/${props.data.image}`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">{props.data.price}</p>
        <button className="btn btn-primary" onClick={handleDetail}>
          Go somewhere 1
        </button>
        <button
          className="btn btn-primary"
          onClick={() => props.handleDetail(props.data.id)}
        >
          Go somewhere 2
        </button>
      </div>
    </div>
  );
}

// CardEvent.propTypes = {
//   data: PropTypes.object,
//   newData: PropTypes.string,
// };

export default CardEvent;
