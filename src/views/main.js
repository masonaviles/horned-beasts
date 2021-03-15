import React from 'react';

// let hornedBeastsArr = [];
const imgUrl = "https://camo.githubusercontent.com/313886fb1e0a318052eb1a6fdc42aa54d0fb5324e68bc56a15074799f1fb6bab/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313439303733393034333931332d3233396236636466343038343f697869643d4d5877784d6a4133664442384d48787761473930627931775957646c6648783866475675664442386648772533442669786c69623d72622d312e322e31266175746f3d666f726d6174266669743d63726f7026773d3134313026713d3830";

class Main extends React.Component {
  
  render() {
    return(
      <section id="main">
        <ul>
          <HornedBeasts title={'Mountain Goat'} url={imgUrl} description={'Bahh'}/>
        </ul>
      </section>
    );
  }
}

class HornedBeasts extends React.Component {
  render() {
    return(
      <article id="main">
        <li>
          <h3>{this.props.title}</h3>
          <img src={this.props.url} alt={this.props.description} title={this.props.title}/>
          <p>{this.props.description}</p>
        </li>
      </article>
    );
  }
}

export default Main;
