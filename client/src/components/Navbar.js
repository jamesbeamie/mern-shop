import React, { Component } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class NavBar extends Component {
  state = {
    isOpen: false
  };

  togler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <NavBar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>Shopping</NavbarBrand>
            <NavbarToggler onClick={this.togler} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='/'>Kalink</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </NavBar>
      </div>
    );
  }
}

export default NavBar;
