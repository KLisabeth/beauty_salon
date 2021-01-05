import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
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
    dispatch(signin(email, password));
  };

  return (
    <div className="signin-page">
    <div className="form-container">
      <Form className="form"  onSubmit={submitHandler}>
        <h3 className="text-center">
          <b>Sign-in</b>
        </h3>
        <h6 className="text-danger">
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </h6>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          className="submit"
          variant="outline-info"
          block
          type="submit"
         >
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
}

export default SignIn;
