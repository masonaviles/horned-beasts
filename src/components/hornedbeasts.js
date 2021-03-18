import React from 'react';
import Card from 'react-bootstrap/Card'
import Heartlike from './heartlike';
import BeastModal from './beastModal';

class HornedBeasts extends React.Component {

  render() {
    return (
      <div className="beasts-container">
        <Card style={{ width: '18rem' }} onClick={this.addFavorite}>
          <Card.Img variant="top" src={this.props.src}  alt={this.props.description} title={this.props.title}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title><Heartlike />
            <Card.Text>
              {this.props.description}
              <BeastModal />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
