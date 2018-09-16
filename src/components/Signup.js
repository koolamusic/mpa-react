import React, { Component } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, FormGroup, Input } from 'reactstrap';
import HeaderLite from './HeaderLite';
import FooterLite from './FooterLite';
import classnames from 'classnames';




class Signup extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <section>

        {/* Mount HeadLite Component */}
        <HeaderLite />
        {/* End HeaderLite Component */}


        <Container>
          <div className="SignupForm col-md-8 offset-2">
            <h4 className="text-white heading-6 text-center">Register your Account</h4>
            <Nav tabs className="SignupFormNav mt-3 mb-4">
              <NavItem>
                {/* Tab Navigation Link */}
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' }, 'SignupFormNavLink',)}
                  onClick={() => { this.toggle('1'); }}>
                  Regular User
                </NavLink>
              </NavItem>


              <NavItem>
                {/* Second Tab Navigation Link */}
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' }, 'SignupFormNavLink')}
                  onClick={() => { this.toggle('2'); }}>
                  Legal Entity
                </NavLink>
              </NavItem>

            </Nav>{/* End Tab Navigation */}




            <TabContent activeTab={this.state.activeTab}>

              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Input className="rounded-0 bg-transparent" type="text" placeholder="Name">
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Input className="rounded-0 bg-transparent" type="text" placeholder="Location">
                      </Input>
                    </FormGroup>
                    <Button className="btn-block FormButton mt-4" color="danger">Submit</Button>

                  </Col>
                </Row>
              </TabPane>



              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Input className="rounded-0 bg-transparent" type="text" placeholder="Name">
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Input className="rounded-0 bg-transparent" type="text" placeholder="Location">
                      </Input>
                    </FormGroup>
                    <Button className="btn-block HeroFormButton mt-4" color="danger">Submit</Button>

                  </Col>
                </Row>
              </TabPane>
              

            </TabContent>{/* End Tab Content  */}
          </div>
          
          
          </Container>

        {/* Call to Footer Lite Component */}
        <FooterLite />
        {/* End FooterLite */}
      </section>
    );
  }
}

export default Signup;


