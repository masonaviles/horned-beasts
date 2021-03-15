import React from 'react';

class Main extends React.Component {
  render() {
    return(
      <section id="main">
        <HornedBeasts />
      </section>
    );
  }
}

class HornedBeasts extends React.Component {
  render() {
    return(
      <article id="main">
        <h2>Horned Beasts!</h2>
      </article>
    );
  }
}

export default Main;
