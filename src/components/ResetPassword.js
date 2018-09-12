import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';
import PreFooter from './PreFooter';
import FooterLite from './FooterLite';
import HeaderLite from './HeaderLite';

//import svg components
import document from './img/svg/document.svg';
import report from "./img/svg/report.svg";
import give from './img/svg/hands.svg'




class ResetPassword extends Component {
  render() {
    return (
      <section>
        <HeaderLite />

        <Container className="mr-auto w-50 mt-5 mpa__color-dark">
          <div className="shadow-sm mt-4 p-5">
            <h3 className="text-center">Reset your password</h3>
              <p className="text-center">Submit your email to receive a password reset token</p>

            <Form className="pb-5">
              <FormGroup className="mt-5">
              <Label for="resetPassword">Email</Label>
                <Input className="rounded-0" id="resetPassword" type="email" placeholder="provide your email" />
                <Input type="submit" className="btn btn-block rounded-0 btn-danger mt-4 FormButton" />
              </FormGroup>
            </Form>
          </div>
        </Container>


        {/* Pre Footer Component */}
        <Container>
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

export default ResetPassword;