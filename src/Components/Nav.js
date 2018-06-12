import React, {Component} from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler,
        Collapse, NavItem, NavLink } from 'mdbreact'

class Nav extends Component {
    state = {
        colors: ['#272932', '#4d7ea8', '#828489', '#9e90a2', '#b6c2d9']
    }
    
    constructor(props) {
        super(props)
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this)
    this.toggle = this.toggle.bind(this)
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
                <Navbar color="white"  light className="navbar navbar-expand-lg navbar-opacity" scrolling>
                    <NavbarBrand href="/" className="animated fadeInDown">
                        <strong>DG</strong> | Web Development
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left className="animated fadeInDown">
                          <NavItem active>
                              <NavLink to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/About">About</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/Portfolio">Portfolio</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/Contact">Contact</NavLink>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                
                </Navbar>


        );
    }
}

export default Nav
