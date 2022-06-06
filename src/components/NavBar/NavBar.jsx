
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget'


function Menu(){
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Tienda Online</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Calzado</Nav.Link>
                            <NavDropdown title="Indumentaria" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Camisas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Pantalones
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    )
}

export default Menu