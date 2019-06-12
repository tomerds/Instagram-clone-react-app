import React from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label } from 'reactstrap';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  updateFields = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitForm = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  }


  render() {
    return (
      <Container className="Login">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="username"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={this.state.username}
                onChange={this.updateFields}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={this.state.password}
                onChange={this.updateFields}
              />
            </FormGroup>
          </Col>
          <Button onClick={this.submitForm} >Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default Login;