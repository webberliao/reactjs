import React, {useState, useEffect, useRef} from 'react';
import SubContent from './subcontent';

// let mounted = useRef({});

function Content(){
    const [strValue, setstrValue] = useState("HelloContent");
    const [counts, setCounts] = useState(0);
    
    const printMsg=()=>{
        document.getElementById('chged').innerHTML="我被按到了";
    }

    const ShowLog=(event)=>{
        console.log(event.target.value);
        this.couns = this.couns + 1;
    }

    const multiButton=()=>{
        var output=[];
        let i = 0;
        for(i = 0;i < 4;i++){
            if ((i % 2) === 1){
                output.push(<button onClick={ printMsg }>我是第{i}個按鍵</button>);
                output.push(<p><input type="number" onChange={ ShowLog } /></p>);
            }
        }
        return output;
    }

    // useEffect(()=>{
    //     if(mounted.current===false){/* 這段是 componentDidMount*/
    //       mounted.current=true;
    //     }
    //     else{ /* 這段是componentDidUpdate */
          
    //     }
        
    //     return (()=>{ /* 這段是 componentWillUnmount */
             
    //     })
    //   },[]); /* 陣列內的參數是用來限定當哪些變數被改變時useEffect要觸發 */ 

    return (
        <div className='Contant'>
            <h1>{strValue}</h1>
            {multiButton}
            <input id='chged' type="text"/>
            <SubContent counts={counts}/>
        </div>
    );
}

export default Content;

