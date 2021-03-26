import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import HornedBeasts from '../components/hornedbeasts';
import rawData from '../data/data';
import FilterBar from '../components/filterBar';

class Main extends React.Component {

  constructor(props){
    super(props);
    this.state={
      gallery: rawData,
      filteredHorns: rawData,
      selectedHornValue: "All"
    }
  }

  updateHornValue = (e) => {
    e.preventDefault();
    this.setState({selectedHornValue: e.target.value});
    
    const filteredHorns = this.state.gallery.filter((beast) => {
      if (e.target.value === "All") {
        return beast;
      } else {
        return beast.horns === +e.target.value;
      }
    });
    this.setState({filteredHorns});
  }


  render() {
    return(
      <main>
        <div id="wrapper">
        <FilterBar 
          updateHornValue={this.updateHornValue}
        />
        <CardDeck>

        {this.state.filteredHorns.map((beast, index) => (
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
