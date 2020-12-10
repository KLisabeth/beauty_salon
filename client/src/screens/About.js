import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import hands from '../assets/images/hands.jpg'



function About() {
    return (
<div className="about-page">
    <h1 className="m-2">About us</h1>
    <h6>Dear clients! We are thrilled to invite you to Pretty Woman beauty salon in Brussel that was created especially to serve you!
     We’ve opened our doors for business in 2014 and have been serving
     clients from all over the world since then. Our experienced team offers 
     a wide variety of salon services and our goal is to make each and every client
     feel at home!
    </h6>
<Container>
<h2>Tips for Correcting Common Nail Concerns</h2>
  <Row>
   <Col sm={7}> 
    <h3 className="about-discover">Discover how sculpting gel can help fix and correct some of the most common nail problems.</h3>
    </Col>
    <Col sm={4}> <img
    className="handsImg mr-3"
    src={hands}
    alt="hands"
  /></Col>
  </Row>
</Container>
  <h6>Though there’s been a trend for the last five years or so towards more natural nail services, nail enhancements are making a comeback. 
  And while not every client can wear those extra-long, stiletto or coffin-shaped extensions, sculpting gel can be used for so much more. In fact, 
  it can be a solution for everything from brittle-to-breakage-prone nails to correcting nail shape.
    <br/>
    “Clients may think that [enhancements] damage the nail and that you have to give them a break every so often, but
     if the products and techniques used respect the health and condition of the nail, ‘giving nails a break’ from nail services should never be required.”
    <hr/>
    <b>Problem:</b> Ridges
    “Sculpture Base Gel is applied to the nail and the application is thick enough to fill in the ridges. The entire process takes less than an hour and lasts approximately three weeks.” 
    <hr/>
    <b>Problem:</b> Ski-Jump Nails
    “If nails are sloping down or curving, we’ll file the sides and build the top with gel so you can’t see the issue anymore. We sculpt a brand new nail by putting a sticker or form on the natural nail, 
    and instead of just gluing tips on, we tuck a form underneath the nail bed so it’s nice and smooth.” 
    <hr/>
    <b>Problem:</b> Strengthening Weak/Brittle Nails
    “Brittle nails are prone to chipping at the free edge, so overlays will protect the nail from chipping. Capping the free edge with gel will also make the application more durable.”
    <hr/>
    <b>Problem:</b> Short Nail Beds
    “For clients with short nail beds, we can create the illusion of elongated nails with enhancements by using a different colour that’s a blush or rosy tone. We stretch out the free edge so nail beds will look longer.
     It also prevents clients from having chiclet- looking nails.” 
    </h6>
    <p className="m-4 p-2"></p>
</div>
    )
}

export default About