import React from 'react';
import "./ButtonEncrypt.css";

const buttonEncrypt = props => {
    return(
        <button className="encButton" onClick={props.clicked}>Encrypt</button>
    );
}

export default buttonEncrypt;