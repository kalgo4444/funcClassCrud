import "./Header.scss";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useOpenModal } from "../../store/useOpenModal";

const Header = () => {
  const { pathname } = useLocation();
  const { toggleModal } = useOpenModal();
  return (
    <header className="header">
      <nav className="container nav">
        <div className="nav__logo">
          <NavLink to={"/"}>LOGO.</NavLink>
        </div>
        <ul className="nav__collection">
          <li className="nav__link">
            <NavLink to={"/country"}>Country</NavLink>
          </li>
          <li className="nav__link">
            <NavLink to={"/movie"}>Movie</NavLink>
          </li>
        </ul>
        {pathname === "/movie" ? (
          <button onClick={() => toggleModal()} className="nav__btn">
            Add Data
          </button>
        ) : null}
      </nav>
    </header>
  );
};

export default React.memo(Header);
