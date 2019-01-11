import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Tosser from './components/Tosser';

class App extends React.Component {
  public render() {
    return (
      <div className="toss-container">
        <Header />
        <Tosser />
      </div>
    );
  }
}

export default App;
