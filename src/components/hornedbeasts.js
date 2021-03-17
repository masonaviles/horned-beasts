import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Data from '../data/data';
import Heartlike from './heartlike';

class HornedBeasts extends React.Component {
  render() {
    const beasts = Data.map((beast) =>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={beast.image_url}  alt={beast.description} title={beast.title}/>
        <Card.Body>
          <Card.Title>{beast.title}</Card.Title><Heartlike />
          <Card.Text>
            {beast.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
    return (
      <div className="beasts-container">
        {beasts}
      </div>
    );
  }
}

export default HornedBeasts;
