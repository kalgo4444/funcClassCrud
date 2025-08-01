import { useNavigate } from "react-router-dom";
import "./Home.scss";
import React from "react";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="home">
      <div className="container">
        <div className="home__wrapper">
          <h1 className="home__title">Welcome</h1>
          <p className="home__desc">Go to Not Found Page</p>
          <button
            onClick={() => navigate("/notfound")}
            className="home__btn button"
          >
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Home);
