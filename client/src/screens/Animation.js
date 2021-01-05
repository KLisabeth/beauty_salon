import React, { useState, useEffect } from 'react'
import 'react-animation/dist/keyframes.css'
import {AnimateOnChange} from 'react-animation'
import {Row, Col, Container} from 'react-bootstrap';
import Advertisement from './Advertisement';

function Animation() {
    const words = [
        'Dear clients!',
        'We are thrilled to invite you to',
        'Pretty Woman beauty salon in Brussels',
        'That was created especially to serve you!',
        'Our experienced team offers',
        ' variety of ',
        'salon services',
        'our goal is',
        'to make each & every client feel at home',
        'Choose your service',
        'Sit back and relax'
    ]
   
    
      const [current, setCurrent] = useState(0)
    
      useEffect(() => {
        const interval = setInterval(() => {
          if (current === words.length - 1) {
            setCurrent(0)
          } else {
            setCurrent(current + 1)
          }
        }, 4000);
        return (() => {
          clearInterval(interval)
        })
      })
      
      return (
        <div className='animation-page'>
        <Container>
         <Row>
         <Col sm={8}>
       <Advertisement/>
        </Col>
        <Col sm={4}>
        <h1 className="animation-words"><AnimateOnChange id="words">{words[current]}</AnimateOnChange></h1>
        </Col>
        </Row>
        </Container>
         </div>
      )
}

export default Animation
