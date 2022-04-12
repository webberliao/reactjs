import React, {useState} from 'react';

const Header = ()=>{
    const [strValue, setstrValue] = useState("HelloHeader");
    

    return (
        <div className='Header'>
            <h1>{strValue}</h1>
        </div>
    );
}
export default Header;