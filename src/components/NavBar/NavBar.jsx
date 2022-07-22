import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link,NavLink } from 'react-router-dom'


function Menu(){
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                    <Link to='/'>
                    Tienda Online
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/categorias/Zapatillas'>Calzado</NavLink>
                            <NavDropdown title="Indumentaria" id="navbarScrollingDropdown">
                                
                                <NavDropdown.Item>
                                <Link to='/categorias/Remeras'>
                                Remeras
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                <Link to='/categorias/Buzos'>
                                Buzos
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                
                                <NavDropdown.Item>
                                <Link to='/categorias/Pantalones'>
                                Pantalones
                                </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu