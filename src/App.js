import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layerout/navBar'
import DoctortTypeSlectForm from "./components/dashboard/Dashboard"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <DoctortTypeSlectForm/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
