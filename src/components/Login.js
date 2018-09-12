import React, { Component } from 'react';
import { Container, Form, Input,  } from 'reactstrap';
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

        <Container>
          <div className="mr-auto shadow-sm mt-4 p">
            <h3>Login into your account</h3>
            <Form>
              <Input type="email" placeholder="provide your email" />
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

export default Login;
