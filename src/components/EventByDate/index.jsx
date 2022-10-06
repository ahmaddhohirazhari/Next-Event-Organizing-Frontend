import { useEffect, useState } from "react";
import CardEvent from "../../components/CardEvent";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import "./index.css";
export default function EventByDate() {
  const navigate = useNavigate();
  // const data = [
  //   { id: 1, name: "Tea", category: "Drink" },
  //   { id: 2, name: "Milk", category: "Drink" },
  //   { id: 3, name: "Coffee", category: "Drink" },
  // ];
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [date, setDate] = useState(`${new Date()}`);
  const [prevDate, setPrevDate] = useState(`${new Date()}`);
  console.log(prevDate);
  // const prevDate1 = new Date(new Date(date).setDate(date.getDate() + 1));

  // DIGUNAKAN UNTUK GET DATA PERTAMA KALI
  useEffect(() => {
    getDataEvent();
  }, []);

  // DIGUNAKAN UNTUK GET DATA JIKA ADA PERUBAHAN STATE
  useEffect(() => {
    getDataEvent();
  }, [page]);

  useEffect(() => {
    getDataEvent();
  }, [date]);

  const getDataEvent = async () => {
    try {
      const result = await axios.get(
        `event?page=${page}&searchName=&searchDateShow=&sort=`
      );

      setData(result.data.data);
      setPagination(result.data.pagination);
    } catch (error) {
      console.error(error);
    }
  };
  // const day = new Date(date);
  // console.log(day);
  // const prevDate1 = new Date(new Date(day).setDate(day.getDate() - 1));
  // console.log(prevDate1);

  const handleDate = () => {
    setDate(new Date().toString());
  };
  console.log(typeof date);
  const day = new Date(date);
  console.log(typeof day);

  const handlePrevDate1 = () => {
    setPrevDate(new Date(new Date(date).setDate(date.getDate() - 1)).toString);
  };

  const handlePrevDate2 = () => {
    setDate(new Date(new Date(date).setDate(date.getDate() - 2)));
  };

  const handleNextDate1 = () => {
    setDate(new Date(new Date(date).setDate(date.getDate() + 1)));
  };
  const handleNextDate2 = () => {
    setDate(new Date(new Date(date).setDate(date.getDate() + 2)));
  };

  const handleDetailProduct = (eventId) => {
    navigate(`/detail/${eventId}`);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <section id="EventByDate mb-5">
      <div className="container text-center ">
        <div className="text-center">
          <button className="button_event">Event</button>
          <h3 className="mb-5">Events For You</h3>
        </div>
        <div className="d-flex justify-content-center gap-5">
          <button className="event_date" onClick={handlePrevDate2}>
            {date}
          </button>

          <button className="event_date" onClick={handlePrevDate1}>
            {prevDate}
          </button>
          <button className="event_date_active event_date" onClick={handleDate}>
            {date.toString().split("2022")[0]}
          </button>
          <button className="event_date" onClick={handleNextDate1}>
            {date}
          </button>
          <button className="event_date" onClick={handleNextDate2}>
            {date}
          </button>
        </div>
        <div className="container_event  justify-content-center gap-4 mt-5">
          <main className="container container_event gap-3">
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item.eventId}>
                  <CardEvent
                    data={item}
                    newData="Data Baru nih"
                    handleDetail={handleDetailProduct}
                  />
                </div>
              ))
            ) : (
              <div className="text-center">
                <h3>Data Not Found !</h3>
              </div>
            )}
          </main>
        </div>
      </div>

      <div className="d-flex gap-2 justify-content-center w-100 my-5">
        <button className="btn btn-primary" onClick={handlePrevPage}>
          &lt;
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={page === pagination.totalPage ? true : false}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
