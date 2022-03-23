import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './Header';

class App extends Component{ // 繼承Component類別
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>101</h2>
        <h3>Hello</h3>
        <Header />
    	</div>
    );
  }
}

export default App;
