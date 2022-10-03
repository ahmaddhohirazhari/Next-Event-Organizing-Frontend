import "./index.css";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import EventByDate from "../../components/EventByDate";
import EventByLocation from "../../components/EventByLocation";
import EventByCategory from "../../components/EventByCategory";
import Footer from "../../components/Footer";

function Landing() {
  return (
    <>
      {/* START HEADER */}
      <Header />
      {/* END HEADER */}

      {/* START MAIN */}
      <Banner />
      <EventByDate />
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
