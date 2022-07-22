import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Item({prod}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.imagen} />
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>{prod.descripcion}</Card.Text>
        <Link to={`/detail/${prod.id}`}>
          <Button variant="primary">Detalle Producto</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item