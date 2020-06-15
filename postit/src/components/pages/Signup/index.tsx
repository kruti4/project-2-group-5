import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import './style.css';
import { SignUp } from '../../signupForm';

// site landing page for all guest users.  Will have conditionally rendered login/signup containers

export class SignupPage extends React.Component<any, any> {
  render() {
    return (
      <Container className='main-container'>
        <Row className='h-100'>
          <Col className='left-panel' xs={8}></Col>
          <Col className='right-panel' xs={4}>
            <Row className='flex-container'>
              <h3 className='title-text'>Create an Account</h3>
            </Row>
            <Row className='signup-form'>
              <SignUp />
            </Row>
            <Row className='flex-container'>
              <p className='sub-text'>
                Already a member?
                <br />
                Login <a href='/'>here</a>!
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}