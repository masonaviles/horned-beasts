import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeasts from '../components/hornedbeasts';

class Main extends React.Component {

  render() {
    return(
      <main>
        <div className='wrapper'>
          <HornedBeasts/>
        </div>
      </main>
    );
  }
}

export default Main;
