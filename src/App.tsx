import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Tosser from './components/Tosser';

class App extends React.Component {
  public render() {
    return (
      <div className="toss-container">
        <CssBaseline />
        <Header />
        <Tosser />
      </div>
    );
  }
}

export default App;
