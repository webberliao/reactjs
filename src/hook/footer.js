import React, {useState} from 'react';


const Footer = ()=>{
    const [strValue, setstrValue] = useState("HelloFooter");
    

    return (
        <div className='Footer'>
            <h1>{strValue}</h1>
        </div>
    );
}
export default Footer;