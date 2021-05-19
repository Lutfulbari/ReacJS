import React,{Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {
   constructor(props){
       super(props);
       this.state = {
           inNavOpen: false
       }
   }
   navbarToggler =()=>{
       this.setState({
           isNavOpen: !this.state.isNavOpen
       })
   }
   
   
    render(){
        return (
            <div>
                <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navbarToggler} />
                        <NavbarBrand href="/">RichFood</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <nav className="mr-auto" navbar>
                            <NavItem>
                            <link to="/" className="nav-link active">Home</link>
                            </NavItem>
                            <NavItem>
                            <link to="/menu" className="nav-link">Menu</link>
                            </NavItem>
                            <NavItem>
                            <link to="/about" className="nav-link">About</link>
                            </NavItem>
                            <NavItem>
                            <link to="/contact" className="nav-link">Contact</link>
                            </NavItem>
                        </nav>
                        </Collapse>
                    </div>
                </Navbar>
    
            </div>
        );
    }
    
}

export default Navigation;