import React from 'react';

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
        <button onClick={this.heartBeast}>❤️</button>
        <span>{this.state.hearts}</span>
      </div>
    );
  }
}

export default Heartlike;
