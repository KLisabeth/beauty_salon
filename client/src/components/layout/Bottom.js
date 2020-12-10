import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaMapMarkedAlt } from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

import { GrInstagram } from "react-icons/gr";

import { FaFacebook } from "react-icons/fa";

import { FiPhoneCall } from "react-icons/fi";
import background2 from "../../assets/images/background2.png";
import { RiEdit2Fill } from "react-icons/ri";

function Bottom() {
  return (
    <div className=" bg-dark text-white link-container">
      <img className="bottom-img" src={background2} alt="nail-polish" />

      <Container className="container-box">
        <Row>
          <Col sm={4}>
            <h5 className="mt-4 text-white">What we offer</h5>

            <h5>
              <Nav.Link className="text-secondary" href="/manicure">
                Manicure
              </Nav.Link>
            </h5>
            <h5>
              <Nav.Link className="text-secondary mt-3" href="/pedicure">
                Pedicure
              </Nav.Link>
            </h5>
            <h5>
              <Nav.Link className="text-secondary mt-3" href="/epilation">
                Epilation
              </Nav.Link>
            </h5>
            <h5>
              <Nav.Link className="text-secondary mt-3" href="/other">
                Other procedures
              </Nav.Link>
            </h5>
          </Col>
          <Col sm={4}>
            <h5 className="mt-4 text-white">Contact us</h5>
            <h5>
              <FiPhoneCall /> 0489 22 16 07
            </h5>
            <h5>
              <HiOutlineMail /> halynapostevka59@gmail.com
            </h5>
            <h5>
              <FaMapMarkedAlt /> Rue des Eburons 22 <br /> 1000 Brussel, Belgium
            </h5>
          </Col>
          <Col sm={4}>
            <h5 className="mt-4 text-white"> Follow us</h5>
            <div className="social-media">
              <a href="https://www.instagram.com/pretty_woman.beautysalon/?igshid=wvzfzi5nlsg8&fbclid=IwAR2n-gh-c2b3v7elteaSPMBCLSSpYmGqISiCWdACLP0C19fDgyX2myd21hA">
                <GrInstagram className="instagram" />
              </a>
              <a href="https://www.facebook.com/prettywoman.beautys">
                <FaFacebook className="facebook"/>
              </a>
              <Nav.Link href="/appointment" className="make-button text-white">
                <RiEdit2Fill />
                MAKE APPOINTMENT
              </Nav.Link>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bottom;
