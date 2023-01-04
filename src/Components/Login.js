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

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;

    if (
      store.getState().addUser.email === email &&
      store.getState().addUser.password === password
    ) {
      this.props.history.push("/main");
    } else {
      console.log("email or password is wrong!");
      console.log(store.getState().addUser);
    }
  };

  render() {
    return (
      <Container>
        <Divider hidden />
        <Header as="h1">Login</Header>
        <Segment>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input
                onChange={this.handleChange}
                name="email"
                placeholder="Enter your emial..."
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                onChange={this.handleChange}
                name="password"
                type="password"
                placeholder="Enter your password..."
              />
            </Form.Field>
            <Button onClick={this.handleSubmit} color="green" type="submit">
              Log In <Icon name="cloud upload" />
            </Button>
            <Link to="/">
              <Button color="red" type="submit">
                Register
              </Button>
            </Link>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default Login;
