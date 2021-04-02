import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export function Signup(props) {
  return (
    <Container>
      <Row>
        <h1>Sign up</h1>
      </Row>
      <Form onSubmit={props._handleUserSignup}>
        <Form.Row>
            <Form.Group as={Col} controlId='first_name'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Cool'
                autoComplete='given-name'
                required
                value={props.userSignup.first_name}
                onChange={props._handleChangeSignup}
              />
            </Form.Group>
            <Form.Group as={Col} controlId='last_name'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Cat'
                autoComplete='family-name'
                required
                value={props.userSignup.last_name}
                onChange={props._handleChangeSignup}
              />
            </Form.Group>
        </Form.Row>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='email@domain.com'
              autoComplete='email'
              required
              value={props.userSignup.email}
              onChange={props._handleChangeSignup}
              />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              autoComplete='password'
              required
              value={props.userSignup.password}
              onChange={props._handleChangeSignup}
              />
          </Form.Group>
          <Form.Group controlId='passwordConf'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              autoComplete='passwordConf'
              required
              value={props.userSignup.passwordConf}
              onChange={props._handleChangeSignup}
              />
          </Form.Group>
          <Button variant='dark' type='submit'>Sign up</Button>
        <Form.Text className='text-muted'>
          <a id='login' onClick={props.togglePage}>
            Already a Member? Click here
          </a>
        </Form.Text>
      </Form>
    </Container>
  );
}
