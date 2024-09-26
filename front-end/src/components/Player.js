import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{ width: '286px', height: '380px' }} />
      <Card.Body>
        <Card.Title style={{ fontSize: 25 }}>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{ fontSize: 20 }}>{team}</ListGroup.Item>
        <ListGroup.Item>{nationality}</ListGroup.Item>
        <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
        <ListGroup.Item>{age}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Player;
