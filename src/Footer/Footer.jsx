import React from "react";
import "./Footer.scss";
import Logo from "/public/images/logo_white.svg";

function Footer() {
  return (
    <footer>
      <div>
        <img className="logo" src={Logo} alt="logo" />
      </div>
    </footer>
  );
}

export default Footer;
