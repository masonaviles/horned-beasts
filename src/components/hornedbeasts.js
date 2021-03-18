import React from 'react';
import Card from 'react-bootstrap/Card'
import Heartlike from './heartlike';

class HornedBeasts extends React.Component {

  constructor(props){
    super(props);
    this.state={
      favorites: 0
    }
  }

  addFavorite = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  }

  render() {
    // const beasts = Data.map((beast) =>
    //   <Card style={{ width: '18rem' }}>
    //     <Card.Img variant="top" src={beast.image_url}  alt={beast.description} title={beast.title}/>
    //     <Card.Body>
    //       <Card.Title>{beast.title}</Card.Title><Heartlike />
    //       <Card.Text>
    //         {beast.description}
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    // );
    return (
      <div className="beasts-container">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.src}  alt={this.props.description} title={this.props.title}/>
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
