import React from "react";
import {
  Button,
  Form,
  Segment,
  Container,
  Icon,
  Header,
  Divider,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import store from "../Store";
import { userAdded } from "./Actions";

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePassword = () => {
    const { username, email, password, passwordConfirmation } = this.state;

    if (password === passwordConfirmation) {
      console.log("SUCCESS!!");
      store.dispatch(
        userAdded({ username: username, email: email, password: password })
      );

      this.props.history.push("/login");
    } else {
      console.log("passwords not matching");
    }
  };

  handleSubmit = () => {
    const { username, email, password, passwordConfirmation } = this.state;
    if (username === "" || email === "") {
      console.log("please fill out the missing fields!");
    } else if (password === "" || passwordConfirmation === "") {
      console.log("please fill out the password form!");
    } else {
      this.handlePassword();
    }
  };

  render() {
    //const { username, email, password } = this.state;

    return (
      <Container>
        <Divider hidden />
        <Header as="h1">Register</Header>
        <Segment>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input
                onChange={this.handleChange}
                name="username"
                placeholder="Enter your username..."
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                onChange={this.handleChange}
                type="email"
                name="email"
                placeholder="Enter your email..."
              />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input
                onChange={this.handleChange}
                type="password"
                name="password"
                placeholder="Enter your password..."
              />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input
                onChange={this.handleChange}
                type="password"
                name="passwordConfirmation"
                placeholder="Confirm your password..."
              />
            </Form.Field>
            <Button onClick={this.handleSubmit} color="green" type="submit">
              Sign Up <Icon name="user" />
            </Button>
            <Link to="/login">
              <Button color="red" type="submit">
                Sign In
              </Button>
            </Link>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default Register;
