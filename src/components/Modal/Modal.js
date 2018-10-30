import React from 'react';

import './Modal.css';

const modal = props => {
  const cssClasses = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];

  return(
      <div className={cssClasses.join(' ')}>
            <h1 id={props.id}>{props.showResult}</h1>
          <button className="Button" onClick={props.closed}>close</button>
      </div>
  );
};

export default modal;