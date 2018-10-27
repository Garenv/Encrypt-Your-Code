import React, { Component } from 'react';

import './Modal.css';

const modal = props => {
  const cssClasses = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];

  return(
      <div className={cssClasses.join(' ')}>
        <h1>Modal</h1>
        button

      </div>
  );
};