import React from 'react';
import Data from '../data/data';
import Heartlike from './heartlike';

class HornedBeasts extends React.Component {
  render() {
    const beasts = Data.map((beast, index) =>
      <div key={index}>
        <h3>{beast.title}</h3>
        <Heartlike />
        <img src={beast.image_url} alt={beast.description} title={beast.title}/>
        <p>{beast.description}</p>
      </div>
    );
    return (
      <div className="beasts-container">
        {beasts}
      </div>
    );
  }
}

export default HornedBeasts;
