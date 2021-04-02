import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export function Login(props) {
  return (
    <Container>
      <Row>
        <h1>Login</h1>
      </Row>
      <Form onSubmit={props._handleSubmit}>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='email@domain.com'
            autoComplete='email'
            required
            value={props.user.email}
            onChange={props._handleChange}
          />
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            autoComplete='password'
            required
            value={props.user.password}
            onChange={props._handleChange}
          />
        </Form.Group>
        <Button variant='dark' type='submit'>
          Sign in
        </Button>
        <Form.Text className='text-muted'>
          <a id='login' onClick={props.togglePage}>
            Not a Member? Click here
          </a>
        </Form.Text>
      </Form>
    </Container>
  );
}
