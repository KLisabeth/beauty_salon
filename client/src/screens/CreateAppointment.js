import React, { useState} from "react";
import { Form, Button} from "react-bootstrap";
import { useDispatch} from "react-redux";
import { saveAppointmentTime } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function CreateAppointment(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setMobile] = useState(Number);

  const dispatch = useDispatch();
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveAppointmentTime(name, email, phone ));
    props.history.push('/calendar')
  };


    return<div>
      <CheckoutSteps step1 ></CheckoutSteps>
        <div className="register-page">
        <div className="form-container">
          <Form className="form" onSubmit={submitHandler}>
            <h3 className="text-center">
              <b>Create an appointment</b>
            </h3>
            <Form.Group >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
    
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
          
              <Form.Label>Phone</Form.Label>
              
              <Form.Control
                type="phone"
                placeholder="Enter your phone number"
                onChange={(e) => setMobile(e.target.value)}
              />
            
              <Form.Text className="text-muted">
              <small> We'll never share your personal information with anyone else.</small>
              </Form.Text>
            </Form.Group>
    
           
            <Button
              className="submit"
              variant="outline-info"
              size="lg"
              block
              type="submit"
            >
              Continue
            </Button>
          </Form>
        </div>
        </div> 
        </div>
    
}

export default CreateAppointment
