import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';
import PreFooter from './PreFooter';
import FooterLite from './FooterLite';
import HeaderLite from './HeaderLite';

//import svg components
import document from './img/svg/document.svg';
import report from "./img/svg/report.svg";
import give from './img/svg/hands.svg'


class Login extends Component {
  render() {
    return (
      <section>
        <HeaderLite />

        <Container className="ml-md-4 col-md-5 mt-5 mpa__color-dark authentication__container">
          
          <div className="shadow-sm mt-4 p-md-5 p-4 authentication__box">
            <h3 className="text-center">Login to your account</h3>
            <p className="text-center">Login via email or using your social media accounts</p>

            <Form className="pb-4">
              <FormGroup className="mt-5">
                <Label for="loginEmail">Email</Label>
                <Input className="rounded-0" id="loginEmail" type="email" placeholder="provide your email" />

                <Label for="loginPassword" className="mt-2">Password</Label>
                <Input className="rounded-0" id="loginPassword" type="password" placeholder="provide your email" />
                <Input type="submit" className="btn btn-block rounded-0 btn-danger mt-4 FormButton" />
              </FormGroup>

            </Form>
          </div>
          {/* Add Prefooter components within column and make invisible in mobile  */}
          <div className="mt-5 mb-4 d-flex flex-wrap flex-row offset-md-1 text-center">
            <PreFooter image={document} alt="learn how we work" heading="Who we Are" />
            <PreFooter image={report} alt="report a case" heading="Report a Sighting" />
            <PreFooter image={give} alt="donate and contribute" heading="Support Us" />
          </div>

        </Container>



        {/* Import Footer Component in Home */}
        <FooterLite />
      </section>
    );
  }
}

export default Login;
