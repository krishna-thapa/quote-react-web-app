import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuoteNavbar = () => {
  return (
    <nav>
      <div className="quote-navbar">
        <h1>Inspiration Quote App</h1>
      </div>
      <Navbar className="quote-navbar-content" bg="light" expand="sm">
        <Navbar.Brand class="quote-navbar-text" as={Link} to="/">Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto links">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/create">New Quote</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default QuoteNavbar;