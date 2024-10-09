import React from "react";
import "./Header.scss";
import Wordmark from "/public/images/wordmark_black.svg";

function Header() {
  return (
    <header>
      <img className="wordmark" src={Wordmark} alt="wordmark" />
    </header>
  );
}

export default Header;
