import React from 'react';
import Button from 'react-bootstrap/Button'

class Heartlike extends React.Component {
  state = {
    hearts: 0
  };

  heartBeast = () => {
    this.setState( prevState => ({
      hearts: prevState.hearts + 1
    }));
  }

  render() {
    return (
      <div className="heart">
        <Button variant="link" onClick={this.heartBeast}>❤️</Button>
        <span>{this.state.hearts}</span>
      </div>
    );
  }
}

export default Heartlike;
