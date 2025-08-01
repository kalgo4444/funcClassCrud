import { useOpenModal } from "../../store/useOpenModal";
import "./Modal.scss";
import React, { useRef } from "react";

const Modal = () => {
  const nameRef = useRef(null);
  const genreRef = useRef(null);
  const ratingRef = useRef(null);
  const yearRef = useRef(null);
  const { modal, toggleModal, addMovie } = useOpenModal();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const genre = genreRef.current.value;
    const rating = ratingRef.current.value;
    const year = yearRef.current.value;

    const movie = {
      id: Date.now(),
      name,
      genre,
      rating,
      year,
    };
    addMovie(movie);
    nameRef.current.value = "";
    genreRef.current.value = "";
    ratingRef.current.value = "";
    yearRef.current.value = "";
    toggleModal();
  };

  return (
    <>
      {modal ? (
        <>
          <div onClick={() => toggleModal()} className="modal__bg"></div>
          <form onSubmit={handleSubmit} className="modal">
            <input type="text" placeholder="Name" ref={nameRef} />
            <input type="text" placeholder="Genre" ref={genreRef} />
            <input type="number" placeholder="Rating" ref={ratingRef} />
            <input type="number" placeholder="Year" ref={yearRef} />
            <div className="modal__btns">
              <button type="submit">Add Data</button>
              <button onClick={() => toggleModal()} type="button">
                Close
              </button>
            </div>
          </form>
        </>
      ) : null}
    </>
  );
};

export default React.memo(Modal);
