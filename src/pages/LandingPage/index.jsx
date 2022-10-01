import "./index.css";

import stanlee from "../../assets/img/stanlee.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Landing() {
  return (
    <>
      {/* START HEADER */}
      <Header />
      {/* END HEADER */}

      {/* START MAIN */}
      <main>
        <article className="article__event">
          <div className="article__image">
            <img src={stanlee} alt="stanlee" className="article__image--size" />
          </div>
          <div className="article__caption">
            <h2 className="article__caption--header">Its me Stanlee</h2>
            <p className="article__caption--desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              similique laudantium qui esse debitis minus mollitia magnam, ullam
              sed delectus veritatis. Nemo officia libero laboriosam saepe
              impedit tenetur quod doloremque?
            </p>
          </div>
        </article>
      </main>
      {/* END MAIN */}

      {/* START FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </>
  );
}

export default Landing;
