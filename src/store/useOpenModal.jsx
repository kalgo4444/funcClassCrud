import { create } from "zustand";

export const useOpenModal = create((set) => ({
  modal: false,
  movieData: JSON.parse(localStorage.getItem("movie")) || [],
  toggleModal: () => set((state) => ({ modal: !state.modal })),
  addMovie: (payload) =>
    set((state) => {
      const movieObg = [...state.movieData, payload];
      localStorage.setItem("movie", JSON.stringify(movieObg));
      return { movieData: movieObg };
    }),
  deleteMovie: (payload) =>
    set((state) => {
      const deleteMovie = state.movieData.filter((item) => item.id !== payload);
      localStorage.setItem("movie", JSON.stringify(deleteMovie));
      return { movieData: deleteMovie };
    }),
}));
