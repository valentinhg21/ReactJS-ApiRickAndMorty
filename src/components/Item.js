import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import './Item.css'
const Item = (props) => {

  //Extraigo datos
  const {name, image, status, species, gender, location, created} = props.perso



  return (
<CardGroup>
  <Card className="card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Estado: </strong> {status}
        </Card.Text>
        <Card.Text>
          <strong>Especie: </strong> {species}
        </Card.Text>
        <Card.Text>
          <strong>Sexo: </strong> {gender}
        </Card.Text>
        <Card.Text>
          <strong>Úbicacion: </strong> {location.name}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Creado: {created}</small>
      </Card.Footer>
    </Card>
  </CardGroup>  
  )
}

export default Item
