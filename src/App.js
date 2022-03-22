import './App.css';
import React, { Component } from 'react';
import SimpleForm from "./components/chatbot/SimpleForm";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style={{maxWidth:"400px"}}>
        <SimpleForm />
      </div>
      </div>
    );
  }
       
}

export default App;
