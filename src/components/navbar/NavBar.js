import './navbar.css'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo.svg';
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    //Function that checks if the user had scrolled the screen more than 51px
    //If true, we use setScrolled to change the state of scrolled from false to true
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  //Function that takes in a value and sets activeLink to that value using setActiveLink
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>

          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#work" className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')}>Work</Nav.Link>
            </Nav>
            <div className="navbar-text">
              <div className="social-icon">
                <a href="www.github.com"><BsGithub /></a>
                <a href="www.twitter.com"><BsTwitter /></a>
                <a href="www.linkedin.com"><BsLinkedin /></a>
              </div>
            </div>
            <button className="connect"><span>Let’s Connect</span></button>
          </Navbar.Collapse>

        </Container>
      </Navbar>
  )
}