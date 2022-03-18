import React, { useState } from "react";

const Header=()=> {
    const [title, setTitle] = useState('Header');

    function handleClick(){
        setTitle('NewHeader');
    }

    return(
        <div>
            <h1>{ title }</h1>
            <h3>Hey</h3>
            <button onClick={ handleClick }></button>
        </div>
    );
}

export default Header;