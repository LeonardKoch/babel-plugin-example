window.existential = (obj, prop) => (obj !== null && typeof obj === "object" && prop in obj ? obj.b : undefined)

import React, { Component } from 'react';
import './App.css';

const myObj = {
  prop: {
    nestedProp: 'Hi, I am a property!'
  },
  prop2: 5
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>{myObj>>prop>>nestedProp}</div>
                <div>I'm after</div>
            </div>
        );
    }
}

export default App;