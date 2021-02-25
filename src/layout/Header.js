import React,{useState,useContext} from "react"
import {
Collapse,Nav,Navbar,NavbarToggler,NavbarBrand,NavItem,NavLink,NavbarText
} from "reactstrap"
import {Link} from "react-router-dom"
import {UserContext} from "../Context/UserContext"

const Header = () => {
    const context = useContext(UserContext)
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return  (
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to="/" className="text-white" >Github Repo Search App</Link></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>  <NavLink tag={Link} to="/" className="text-white">SignUp</NavLink></NavItem>
                    <NavItem>  <NavLink tag={Link} to="/" className="text-white">SignIn</NavLink></NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/" className="text-white">Logout</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}
export default Header
