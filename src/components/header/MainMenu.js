import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//import jpra_logo_sm from "./images/images";

export default class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar  color="faded" light expand="md">

        {/*<NavbarBrand href="/">
           <Media>
            <Media left>
            <Media object data-src="assets/img/jpra_logo_sm" alt="#" /> 
            </Media>
            <Media body>
              <Media heading>
                The Fundamentals of<br/>Personnel Recovery
              </Media>
            </Media>
          </Media>
        </NavbarBrand>*/}

        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            <NavItem>
              <NavLink href="../xtras/resources.html" target="blank">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="../xtras/glossary.html" target="blank">Glossary</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Main Menu
              </DropdownToggle>
              <DropdownMenu right>

                <DropdownItem>
                  Personnel Recovery
                </DropdownItem>
                <DropdownItem>
                  Joint Operations
                </DropdownItem>
                <DropdownItem>
                  Command &amp; Control
                </DropdownItem>
                <DropdownItem>
                  Intel Support to PR
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

