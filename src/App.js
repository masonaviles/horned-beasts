import React from 'react';
import Header from './views/header';
import Main from './views/main';
import Footer from './views/footer';


class App extends React.Component {
  render() {
    return(
      <div id="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
