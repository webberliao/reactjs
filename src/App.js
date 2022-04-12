import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './hook/header';
import Content from './hook/content';
import Footer from './hook/footer';

class App extends Component{ // 繼承Component類別
  constructor(props){
    super(props);
    this.state={
      strValue: "HelloWorld"
    }
  }

  render(){
    return (
      <div className="App">
        <h1>{this.state.strValue}</h1>
        <Header />
        <Content />
        <Footer />
    	</div>
    );
  }
}

export default App;
