import React from 'react';
import Header from './app/Header';
import Footer from './app/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container-fluid">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
