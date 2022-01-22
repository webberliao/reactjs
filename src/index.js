import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const printMsg=()=>{
  document.getElementById('chged').innerHTML="我被按到了";
}

const ShowLog=(event)=>{
  console.log(event.target.value);
}

const multiButton=()=>{
  var output=[];
  for(let i=0;i<4;++i)
  {
    output.push(<button onClick={ ShowLog }>我是第{i}個按鍵</button>)
    if ((i % 2) == 1)
      output.push(<p><input type="text" onChange={ ShowLog }/></p>)
  }
    
  return output;
}


ReactDOM.render(
  <React.StrictMode>
    {/* <App name="Webber" color="grey" number={100} status={true} handleClick={printMsg}>
      Say Something
    </App>
    <div id="chged"></div>
    
    { multiButton }*/}
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
