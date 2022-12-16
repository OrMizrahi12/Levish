import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LevishLogo from '../../Images/LogoLevish.jpg'
import '../../css/Navs/Navbar.css'
import { useNavigate } from 'react-router-dom'


const MyNavbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" className='myNav' >
                <Container>
                    <Nav.Link onClick={() => navigate("/")} href="#Top">
                        <img
                            src={LevishLogo}
                            width="100"
                            height="90"
                            className="d-inline-block align-top"
                        />
                    </Nav.Link>
                    <Navbar.Toggle style={{backgroundColor:"rgb(243, 197, 197)", border:"solid 3px rgb(25,100,57)"}} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className='elementsCenterNav'>
                            <Nav className="me-auto">
                                <Nav.Link
                                    onClick={() => navigate("/Freckels")}
                                    style={{ color: "rgb(85,157,114)", fontWeight: "bold"}}
                                    href="#Top">
                                 נמשים
                                </Nav.Link>
                                <Nav.Link
                                    onClick={() => navigate("/Lips")}
                                    style={{
                                        color: "rgb(85,157,114)",
                                        fontWeight: "bold"
                                    }}
                                    href="#Top">
                                    שפתיים
                                </Nav.Link>
                                <Nav.Link
                                    onClick={() => navigate("/ContactUs")}
                                    style={{ color: "rgb(85,157,114)", fontWeight: "bold" }}
                                    href="#Top">
                                    צור קשר
                                </Nav.Link>
                            </Nav>
                        </div>
                    </ Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar