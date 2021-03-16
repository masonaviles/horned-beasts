import React from 'react';
import Data from '../data/data';

class HornedBeasts extends React.Component {
  state = {
    numberOfLikes: 0
  }

  likeBeast = () => {
    this.setState({ numberOfLikes: this.state.numberOfLikes + 1 });
  }

  render() {
    const beasts = Data.map((beast) =>
      <li>
        <h3>{beast.title}</h3>
        <div>❤️ {this.state.numberOfLikes}</div>
        <img src={beast.image_url} alt={beast.description} title={beast.title} onClick={this.likeBeast}/>
        <p>{beast.description}</p>
      </li>
    );
    return (
      <ul>
        {beasts}
      </ul>
    );
  }
}

export default HornedBeasts;
