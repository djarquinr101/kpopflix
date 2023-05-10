import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`


function NavScroll() {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = (isExpanded) => {
    setExpanded(isExpanded)
  }

  const handleLinkClick = () => {
    setExpanded(false)
  }

  return (
    <Navbar collapseOnSelect bg="light" expand="lg" onToggle={handleToggle} expanded={expanded}>
      <Container fluid>
        <Navbar.Brand><StyledLink to="/">KPopFlix</StyledLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
          <Nav.Link as={Link} to="/girls-group" onClick={handleLinkClick}>Girls Group</Nav.Link>
          <Nav.Link as={Link} to="/boys-band" onClick={handleLinkClick}>Boys Band</Nav.Link>
          <Nav.Link as={Link} to="/soloists" onClick={handleLinkClick}>Soloist</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for your K-Pop Band"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;