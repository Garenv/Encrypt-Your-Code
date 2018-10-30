import React from 'react';
import './ButtonToScroll.css';

const buttonToScroll = (props) => {
    return(
        <button className="about" onClick={props.clicked}>About</button>
    );
};

export default buttonToScroll;