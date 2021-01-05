import React, { useState} from "react";
import { Form, Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setMobile] = useState(Number);
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [rePassword, setRePassword] = useState("");

  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();
  const redirect = props.location.search?props.location.search.split("=")[1]:'/';

  React.useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, phone, password));
  };

  return (
    <div className="register-page">
    <div className="form-container">
      <Form className="form">
        <h3 className="text-center">
          <b>Create an account</b>
        </h3>
        <h6 className="text-danger">
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </h6>
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

        <Form.Group controlId="Passwords">
          <Form.Label>Password</Form.Label>
         
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          /> 
        <Form.Label ></Form.Label>
       
          <Form.Control
            type="password"
            placeholder="Repeat Password"
            onChange={(e) => setRePassword(e.target.value)}
          />
          
        </Form.Group>
        <Button
          className="submit"
          variant="outline-info"
          size="lg"
          block
          type="submit"
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
}

export default Register;