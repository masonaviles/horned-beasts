import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import FilterBar from '../components/filterBar';
import HornedBeasts from '../components/hornedbeasts';
import rawData from '../data/data';

class Main extends React.Component {

  constructor(props){
    super(props);
    this.state={
      gallery: rawData
    }
  }

  render() {
    return(
      <main>
        <div id="wrapper">
        <FilterBar />
        <CardDeck>
        {rawData.map((beast, index) => (
          <div key={index}>
            <HornedBeasts 
              src = {beast.image_url}
              title = {beast.title}
              description = {beast.description}
            />
          </div>
        ))

        }
        </CardDeck>
      </div>
      </main>
    );
  }
}

export default Main;
