import "./index.css";
import { useState } from "react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import EventByDate from "../../components/EventByDate";
import EventByLocation from "../../components/EventByLocation";
import EventByCategory from "../../components/EventByCategory";
import Footer from "../../components/Footer";

function Landing() {
  const [searchName, setSearchName] = useState("");

  const handleSearch = (keyword) => {
    setSearchName(keyword);
  };
  return (
    <>
      {/* START HEADER */}
      <Header />
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
