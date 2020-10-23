import React from "react";
import {Navbar, Nav, NavbarBrand, NavItem} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/idea-logo.png";
import "./style.css";
import Button from "react-bootstrap/Button";

const Header = () => {

    const token = localStorage.getItem("token");
    const history = useHistory();
    return (
        <div className="container-fluid">
            <Navbar bg="bg" expand="lg">
                <NavbarBrand as={Link} to="/">
                    <img
                        src={logo}
                        width="450"
                        height="300"
                        className="d-inline-block align-top"
                        alt="React logo"
                    />{" "}
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav fill variant="tabs" className="justify-content-center">
                        <NavItem className="experiment">
                            <Nav.Link as={Link} to="/home">
                                Ballina
                            </Nav.Link>
                        </NavItem>
                        <NavItem className="experiment">
                            <Nav.Link as={Link} to="/panairi">
                                Panairi
                            </Nav.Link>
                        </NavItem>
                        <NavItem className="experiment">
                            <Nav.Link as={Link} to="/video">
                                Video
                            </Nav.Link>
                        </NavItem>
                        <NavItem className="experiment">
                            <Nav.Link as={Link} to="/lokacioni">
                                Lokacioni
                            </Nav.Link>
                        </NavItem>
                        <NavItem className="experiment">
                            <Nav.Link as={Link} to="/info">
                                Per ne..
                            </Nav.Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="justify-content-end">
                    <NavItem>
                        <Nav.Link as={Link} to="/shporta" className="navbar-right">
              <span className="mr-2">
                <FontAwesomeIcon icon={faCartPlus}/>
              </span>
                            Shporta
                        </Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                    </NavItem>

                    {(token) &&
                        <Button
                        variant="outline-success"
                        className="btn primary mr-3"
                        onClick={() => {
                            console.log(token, "logout onclick 1111");
                            localStorage.setItem("token", "");
                            history.push("/home");
                            console.log(token, "logout onclick 2222");
                        }}>
                        Log Out
                    </Button>
                    }
                </Nav>
            </Navbar>
        </div>
    );
};

const divider = styled.button`
    border
`;

export default Header;
