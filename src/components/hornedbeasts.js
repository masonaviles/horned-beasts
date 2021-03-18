import React from 'react';
import Card from 'react-bootstrap/Card'
import Heartlike from './heartlike';
import BeastModal from './beastModal';

class HornedBeasts extends React.Component {

  render() {
    return (
      <div className="beasts-container">
        <Card style={{ width: '18rem' }}>
          <BeastModal 
            src = {this.props.src}
            title = {this.props.title}
            description = {this.props.description}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title><Heartlike />
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
