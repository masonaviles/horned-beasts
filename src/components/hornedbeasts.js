import React from 'react';
import Card from 'react-bootstrap/Card'
import Heartlike from './heartlike';
import BeastModal from './beastModal';

class HornedBeasts extends React.Component {

  state = {
    modalIsOpen: false
  };

  showModal = () => {
    this.setState({modalIsOpen: true });
  }

  hideModal = () => {
    this.setState({modalIsOpen: false });
  }

  render() {
    return (
      <div className="beasts-container">
        <Card style={{ width: '18rem' }} onClick={this.addFavorite}>
          <Card.Img variant="top" src={this.props.src}  alt={this.props.description} title={this.props.title} onClick={this.showModal}/>
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
