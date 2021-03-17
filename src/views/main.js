import React from 'react';
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
