import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Progress from './progress/Progress';

class App extends Component{ //繼承Component類別
  constructor(props){
    super(props);
    this.btnName = "BtnName";
    this.changeName=this.changeName.bind(this);
    this.changePercent=this.changePercent.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.state = {
      repoName: null
    };
  }

  changePercent(){ //加入changePercent函式
    this.setState({percent:"70%"})
  }

  changeName(){
    this.btnName = this.props.newName;
    console.log("hey");
  }

  handleClick(){
    fetch( 'http://192.168.16.200/api/v1/system/lldp-global?sid=bdkdbdjdadkdncbdadgdcdhdcdhdgdhdjdkdchpgpgehkdbgegngjgogbdcddd', 
    { 
      method:"GET",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
    })
    .then(res => res.json())
    .then(data => {
          /*接到request data後要做的事情*/
          this.setState({repoName: data['transmitInterval']});
    })
    .catch(e => {
        /*發生錯誤時要做的事情*/
        console.log(e);
    })
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.handleClick}>取得jserv以英文字母排序的第一個repo</button>
        <div className="data-display">
          {(this.state.repoName===null) ? "目前還有沒有資料" : this.state.repoName}
        </div>
    	</div>
    );
  }
  // render(){
  //   return(
  //     <div>
  //       <a> helloWorld </a> <br></br>
  //       <button onClick={this.changeName}> {this.btnName} </button><br></br>
  //       <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
  //         <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent,height:"100%",borderRadius:"10px"}}></div>
  //       </div>
  //       <button onClick={this.changePercent}>轉換百分比 </button>
  //     </div>
  //   );
  // }
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
