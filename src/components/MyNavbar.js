import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" bg="light">
        <Container>

          <Navbar.Brand href="/">HydroFarm</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">

              <Nav.Link href="/Home">Home</Nav.Link>

              <Nav.Link href="/About">About</Nav.Link>

              <Nav.Link href="/Technologies">Technologies</Nav.Link>

              <NavDropdown title="More" id="basic-nav-dropdown">

                <NavDropdown.Item href="/Gallery">
                  Gallery
                </NavDropdown.Item>

                <NavDropdown.Item href="/Services">
                  Services
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="/Contact">
                  Contact
                </NavDropdown.Item>

              </NavDropdown>

            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar;
