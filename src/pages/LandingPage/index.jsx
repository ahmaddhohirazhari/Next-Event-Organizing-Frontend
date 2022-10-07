import "./index.css";
import { useEffect, useState } from "react";

import axios from "../../utils/axios";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import EventByDate from "../../components/EventByDate";
import EventByLocation from "../../components/EventByLocation";
import EventByCategory from "../../components/EventByCategory";
import Footer from "../../components/Footer";

function Landing() {
  const userId = localStorage.getItem("idUser");
  const [searchName, setSearchName] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    getData();
    setName(name);
  }, []);
  const getData = async () => {
    try {
      const result = await axios.get(`user/${userId}`);
      console.log(result.data.data[0].username);
      setName(result.data.data[0].username);
    } catch (error) {
      console.error(error.response);
    }
  };
  console.log(setName);

  const handleSearch = (keyword) => {
    setSearchName(keyword);
  };
  return (
    <>
      {/* START HEADER */}
      <Header name={name} />
      {/* END HEADER */}

      {/* START MAIN */}
      <Banner handleSearch={handleSearch} />
      <EventByDate searchName={searchName} />
      <EventByLocation />
      <EventByCategory />

      {/* END MAIN */}

      {/* START FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </>
  );
}

export default Landing;
