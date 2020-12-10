import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel, Nav} from "react-bootstrap";
import NailsSalon4 from '../../assets/images/NailsSalon4.jpg'
import NailsSalon2 from '../../assets/images/NailsSalon2.jpg'
import NailsSalon5 from '../../assets/images/NailsSalon5.jpg'


import { RiEdit2Fill } from "react-icons/ri";




function CarouselEl() {
 
  return (
    <div className="home-page">
   
  <div className="overlay bg-dark text-white">
  
  <Carousel>
  
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src={NailsSalon2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src={NailsSalon4}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src={NailsSalon5}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

  <div className="content1">YOUR BEAUTY OUR DUTY

  <Nav.Link href="/appointment" className="make-button-home text-white" >
    <RiEdit2Fill />MAKE APPOINTMENT
  </Nav.Link>
  </div>
 
  <div className="content">
    Dear clients! We are thrilled to invite you to Pretty Woman beauty salon in Brussel that was created especially to serve you!
     We’ve opened our doors for business in 2014 and have been serving
     clients from all over the world since then. Our experienced team offers 
     a wide variety of salon services and our goal is to make each and every client
     feel at home!
    
  </div>
  </div>
  <div className="content2"> Dear clients! We are thrilled to invite you to Pretty Woman beauty salon in Brussel that was created especially to serve you!
  We’ve opened our doors for business in 2014 and have been serving
  clients from all over the world since then. Our experienced team offers 
  a wide variety of salon services and our goal is to make each and every client
  feel at home!
  </div>
    </div>
  );
}

export default CarouselEl;