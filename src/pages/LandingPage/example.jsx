import { useEffect, useState } from "react";
import CardEvent from "../../components/CardEvent";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import "./index.css";

function Landing() {
  const navigate = useNavigate();
  // const data = [
  //   { id: 1, name: "Tea", category: "Drink" },
  //   { id: 2, name: "Milk", category: "Drink" },
  //   { id: 3, name: "Coffee", category: "Drink" },
  // ];
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  // DIGUNAKAN UNTUK GET DATA PERTAMA KALI
  useEffect(() => {
    getDataProduct();
  }, []);

  // DIGUNAKAN UNTUK GET DATA JIKA ADA PERUBAHAN STATE
  useEffect(() => {
    getDataProduct();
  }, [page]);

  const getDataProduct = async () => {
    try {
      const result = await axios.get(
        `event?page=${page}&searchName=&searchDateShow=&sort=`
      );
      // console.log(result);
      setData(result.data.data);
      setPagination(result.data.pagination);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDetailProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <main className="container d-flex justify-content-center gap-3">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
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
    </>
  );
}

export default Landing;
