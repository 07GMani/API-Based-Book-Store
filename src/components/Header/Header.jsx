import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find Book of Your Choice!
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Lorem ipsum dolor sit amet. Et dolor ducimus non aliquid accusantium
            ut sapiente dolorem aut magnam ducimus ad error voluptatibus.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
