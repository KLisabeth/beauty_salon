import React from "react";
import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Navbar 
        className="footer fixed-bottom navbar-expand-lg justify-content-center text-center"
        bg="dark"
      >
        © 2020 All rights reserved by pretty_woman.beautysalon
      </Navbar>
    </div>
  );
}

export default Footer;
