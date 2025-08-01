import { useOpenModal } from "../../store/useOpenModal";
import Modal from "../modal/Modal";
import "./Movie.scss";
import React from "react";

const Movie = () => {
  const { movieData, deleteMovie } = useOpenModal();
  return (
    <>
      <Modal />
      <section className="movie">
        <div className="container">
          <div className="movie__wrapper">
            {movieData?.map((item) => (
              <div className="movie__card" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.genre}</p>
                <p>{item.year}</p>
                <p>{item.rating}</p>
                <div className="movie__card-btns">
                  {/* <button>Update</button> */}
                  <button onClick={() => deleteMovie(item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Movie);
