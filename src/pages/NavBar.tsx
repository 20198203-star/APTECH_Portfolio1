import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'


function NavBar(){
    return(
      <>
      <Navbar data-bs-theme="dark" style={{backgroundColor: "#4A90E2"}}>
        <Container>
          <Navbar.Brand>Mara Gadgad</Navbar.Brand>
          <Nav style={{textAlign:"center", padding: "10px"}}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>  
    );
}

export default NavBar