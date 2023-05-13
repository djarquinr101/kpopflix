import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`


function NavScroll({info}) {
  const [expanded, setExpanded] = useState(false)
  const [result, setResult] = useState([])
  const [value, setValue] = useState('')
  const navigation = useNavigate()

  const handleToggle = (isExpanded) => {
    setExpanded(isExpanded)
  }

  const handleLinkClick = () => {
    setExpanded(false)
  }

  useEffect(()=> {
   setResult(info.filter(band=> band.name.toLowerCase().includes(value.toLowerCase())))
   console.log(result)
  }, [value])



  return (
    <Navbar collapseOnSelect bg="light" expand="lg" onToggle={handleToggle} expanded={expanded}>
      <Container fluid>
        <Navbar.Brand><StyledLink  to="/" onClick={handleLinkClick}>KPopFlix</StyledLink></Navbar.Brand>
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

          <Form className="d-flex" onSubmit={(e) => {
            e.preventDefault()
            if (result.length >= 1){
              let firstBand = result[0].id
              navigation(`artist/${firstBand}`)
              handleLinkClick()
            } else {
              return alert("please type anything to seach a band")
              handleLinkClick()
            } 
            }}>
            <Form.Control
              type="search"
              placeholder="Search for your K-Pop Band"
              className="me-2"
              aria-label="Search"
              value={value}
              onChange={(event) => {
                const currentValue = event.target.value
                setValue(currentValue)
              }}
            />
            <Button variant="outline-success" type="submit" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;