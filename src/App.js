import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Progress from './progress/Progress';

class App extends Component{ //繼承Component類別
  render(){
    return(
      <div>
        helloWorld
      </div>
    );
  }
}

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <button onClick={props.handleClick}> {props.children} </button>
//         <Progress />
//       </header>
//     </div>
//   );
// }

export default App;
