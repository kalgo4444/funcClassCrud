import { useNavigate } from "react-router-dom";
import "./NotFound.scss";
import React from "react";

const NotFount = () => {
  const navigate = useNavigate();

  return (
    <section className="notFound">
      <div className="container">
        <h3 className="notFound__title">Not Found! 404</h3>
        <p className="notFound__desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          libero.
        </p>
        <div>
          <button onClick={() => navigate("/")} className="button">
            Go Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(NotFount);
